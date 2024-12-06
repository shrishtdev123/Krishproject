const mongoose = require('mongoose');

const UniqueSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true,   
        trim: true     
    },
    product: [
        {
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
        }
    ]
});

 const uniquedata=new mongoose.model('Unique', UniqueSchema);
module.exports =uniquedata
