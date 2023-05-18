const mongoose = require('mongoose')
const productCategoryModel =  mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        default:null
    }

},{
    timestamps: true
})
module.exports = mongoose.model('Category',productCategoryModel)