const Product = require("../model/productmodal");
const mongoose=require("mongoose")
const { ObjectId } = require('mongodb')
class product{
     
     async addproduct(req,res){
            
             
              try {

                  const data=await Product.create(req.body);
                    res.json({data})
                  
                
              } catch (error) 
              {
                  console.log(error);
                  res.json({
                    msg:"some error is occuring"
                  })
                  
              }
       }

       // get product

     async  getallproduct(req,res){
           
            try 
            {
                const item=await Product.find({});

                 res.json({
                     item
                 })
            } 
            catch (error) 
            {
                res.json({
                     msg:"some error"
                })
            }
       }

     // get product by id
   async  getproductbyid(req,res){
         try {

            const id= req.params.id;

            const data=await Product.find({name:"laptop1"});
        
            
            res.json({ 
                 id:id,
                 data

             });
            
         } catch (error) {
            
              console.log(error);
              
         }
     }
}

const pro=new product();

module.exports=pro;