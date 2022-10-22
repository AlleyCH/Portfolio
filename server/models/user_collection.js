let mongoose = require('mongoose');

// create a model class 
let userCollectionModel = mongoose.Schema({   
    contactname: String,
    contactnumber: String,
    emailaddress: String
},
{
    collection: "user_collection"  
});
module.exports = mongoose.model('user_collection', userCollectionModel);