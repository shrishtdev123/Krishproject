const uniquedata = require("../model/uniquecartmodal");

class Unique{

      // this is add funtionality we add data into nested object in the form of key and value
    async  Adduniquedata(req,res){

              try 
              {

                const data = await uniquedata.create(req.body);
                
                   res.json({data})
              }
               catch (error) 
              {
                    res.json({
                        msg:"some error is went wrong"
                    })
              }
      }

      // here we are going to write the getdata method 

    async  Getuniquedata(req,res){
         
            try {
                  const data=await uniquedata.find({});
                  res.json({data});
                  console.log(data.length);
                  
            } 
            catch (error) 
            {
                 res.json({msg:"some error is happen"})
            }
      }

      // getdataby id
    async  Getuniquedatabyid(req,res){
            
            try {
                 const id=req.params.id;

                 const ans=await uniquedata.findOne({uid:id});
                 res.json({ans})
            } 
            catch (error) 
            {
                res.json({msg:"error"})
            }
      }
}

const unique=new Unique();

module.exports=unique;