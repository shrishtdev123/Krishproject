require('dotenv').config()
const mongoose=require("mongoose")

const ConnectDb=async()=>{
     
         try
          {
              console.log(process.env.MONGO_DB_URI);
              
              await mongoose.connect(process.env.MONGO_DB_URI)
              console.log("connected to mongodb");
              
         } 
         catch (error) 
         {
            console.log(error);
            
         }
}
module.exports=ConnectDb
