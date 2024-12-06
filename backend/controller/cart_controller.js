const Cart = require("../model/cartmodel")

class Data 
{ 
  // logic to add data into the database
   async adddata(req, res) 
    {
      
         try {
            await Cart.create(req.body)
    res.json({
       msg:"data added to the cart"
    })
          
         } 
         catch (error) 
         {
              res.json({error})
         }
    }
// logic to remove the data from the database
    async removedata(req,res)
    {
        try {

          const id=req.params.id;
          await Cart.deleteOne({_id:id})
          res.json({
             msg:"data is deleted from the cart",
             id:id
          })
          
        } 
        catch (error) 
        {
            res.json({
               msg:"some error is happen in the network"
            })
        }
    }
// log to updata the data in the data base 
    async update(req,res)
     {
        
      const id = req.params.id;
      const { count, totalprice} = req.body; 

      console.log(count,totalprice); 
      const result = await Cart.updateOne(
          { _id: id },  // Filter by document ID
          { 
              $set: { 
                  count:count, 
                  totalprice:totalprice 
              } 
          }
      );
          
        res.send("this is update fucnction")

    }


     // logic to get the data from the database
  async  getdata(req,res)
  {
       
        try 
        {
             const data=await Cart.find({});
             res.json({data})
        } 
        catch (error) {
             res.json({error})
        }
  }

    
  }
  
  const obj = new Data();
  
  module.exports = obj;
  



