const mongoose=require("mongoose")

const cartShema=new mongoose.Schema({
       img:{
           type:String,
           require:true
       },
       name:{
         type:String,
         require:true
       },
     price:{
          type:Number,
          require:true
       },
       totalprice:{
        type:Number,
        require:true
       },
       count:{
         type:Number,
         require:true
       }

})

// now create the modeal

const Cart=new mongoose.model("Cart",cartShema)

module.exports=Cart;