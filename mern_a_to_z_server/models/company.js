const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema  ( {
    id:{
        type:String,
    },
    name:{
        type: String,
        
    },
    url:{
        type: String, }
        
 
});
module.exports = Company = mongoose.model('company', CompanySchema);
