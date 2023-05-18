const mongoose = require('mongoose')
const userModel = mongoose.Schema({
    name :{
        type : String,
        required: true,
        },
    email :{
        type : String,
        required: true,
        unique: true
        },
        role :{
            type : String,
            default : 'user'
            },
    password : {
        type : String,
        required: true,
        }
    
},
{
    timestamps: true
})

const user = mongoose.model('User',userModel)
module.exports = user