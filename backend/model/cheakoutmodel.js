const mongoose=require("mongoose")

// now create the cheakoutmodal

const CheakoutSchema=new mongoose.Schema({
    firstName:{
         type:String,
         require:true
    },
    lastName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    country:{
        type:String,
        require:true
    },
    paymentMethod:{
        type:String,
        require:true
    },
    phone:{
         type:Number,
         require:true
    },
    id:{
        type:String
    }
})

// now we create the modal

const Cheakout=new mongoose.model("Cheakout",CheakoutSchema);

module.exports=Cheakout;