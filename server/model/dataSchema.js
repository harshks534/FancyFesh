const mongoooose = require('mongoose');

const  dataSchema= new mongoooose.Schema({
    id:{
        type:String,
        required:true
    },
    filename:{
        type:String,
        required:[true],
        trim:true
    },
    link:{
        type:String,
        required:true
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }    
        }
    ],
     
    gender:{
        type:String,
        required:true
    },
    masterCategory:{
        type:String,
        required:true
    },
    subCategory:{
        type:String,
        required:true
    },
    articleType:{
        type:String,
        required:true
    },
    baseColour:{
        type:String,
        required:true
    },
    season:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    usage:{
        type:String,
        required:true
    },
    productDisplayName:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    
    // tokens: [
    //     {
    //         token:{
    //             type: String,
    //             required:true
    //         }
    //     }
    // ]
 })

 const Data=mongoooose.model("DATA",dataSchema);
 module.exports=Data;

