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
    },
    post_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true,
    }],

},{
    timestamps: true
})
module.exports = mongoose.model('Category',productCategoryModel)