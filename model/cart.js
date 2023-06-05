const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var cartSchema = new mongoose.Schema({
    product_id:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    user_id:{
        type:String,
        required:true,
        unique:true,
    } 
});

//Export the model
module.exports = mongoose.model('User', cartSchema);