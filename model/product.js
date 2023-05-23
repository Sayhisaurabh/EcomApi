const mongoose = require('mongoose')
const ProductSchema = mongoose.Schema({
    name :{
        type : String,
        unique: true,
        required: true,
               
    },
    image:{
        type:String,
    },
    price:{
        type:Number,
        required:true
    },
    cat_id :{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref :'Category'
    },
    desc :{
        type:String
    }
},{
    timestamps: true
})
module.exports = mongoose.model('Product',ProductSchema)