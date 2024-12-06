// here we write the buisness logic related to cheaout 
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const Cheakout = require("../model/cheakoutmodel");

class cheak{
     
       // add data into the database

      async addcheakoutdata(req,res){
            try 
            {
                   
               const data=await Cheakout.create(req.body);
                res.json({
                    msg:"this cheaout contrroler",
                    data
                })
            } 
            catch (error) 
            {
                res.json({
                     msg:"some error is happening"
                })
            }
       }

       // getcheout data

      async getcheakout(req,res){
            
          try {
                 const data=await Cheakout.find({});
                 res.json({
                     data
                 })
          } 
          catch (error) 
          {
               res.json({
                msg:"some error happne"
               })
          }
       }

       // get tracking data

      async gettraking(req,res){
            
           try 
           {
                 const id=req.params.trackingid
                 const ans2=await Cheakout.find()
                   
                    let f=0;
                  for(let i=0;i<ans2.length;i++)
                  {
                        //   f=1    
                    if(ans2[i]._id==id)
                        {
                             f=i;
                             break;
                        }
                      break;
                  }
                
                  res.json({
                    data:ans2[f]
                 })
           } 
           catch (error) 
           {
              res.json({
                msg:"some error is in traking id"
              })
            
           }
       }
}

// now create the object of class to access the methods of class

const cheak1=new cheak();

module.exports=cheak1;