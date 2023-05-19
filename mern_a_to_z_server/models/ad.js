const mongoose = require('mongoose');

const AdSchema = new mongoose.Schema  ( {
    id:{
        type:String,
    },
    companyId:{
        type: String,
        
    },
    primaryText:{
        type: String, 
        
   },
    headline:{
    type: String, 
    
    },
    description:{
    type: String, 
    
    }
    ,
    CTA:{
    type: String, 
    
    },
    imageUrl:{
        type:String
    },

});
module.exports = Ad = mongoose.model('ad', AdSchema);
