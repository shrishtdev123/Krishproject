const mongoose=require("mongoose");

// now we create shcema ,its means how data going to stroe in the database

const ProductSchema=new mongoose.Schema({
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

const Product=new mongoose.model("product",ProductSchema);

module.exports=Product;

