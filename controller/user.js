const bcrypt = require('bcrypt')
const User = require('../model/user')
const jwt = require('jsonwebtoken')
//user register
const register = async(req,res)=>{
try {
    const {name,email,password,confirmPassword} = req.body
    const alreadyFilled = await User.findOne({email:email})
    if(alreadyFilled){
        res.status(500).json({msg:"Email Already Exists"})
    }else{
        if(password==confirmPassword){
            bcrypt.hash(password, 10, async function(err, hash) {
                 if(err){
                    res.status(500).json(err)
                 } else{
                    const userRegister = await User.create({
                        name:name,
                        email:email,
                        password:hash
                    })
                    res.status(200).json({data:userRegister,msg:"User Register Succefully"})
                 }
            });
    
        }else{
            res.status(500).json({msg:"Confirm Password Does Not Matched"})
        }
    }
    
} catch (error) {
    res.status(500).json(error)
}
}
// get all users
const users = async(req,res)=>{
    try {
       
        const allUsers = await User.find({})
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(500).json(error) 
    }
}
//user login 
const login = async(req,res)=>{
try {
    const {email,password}  = req.body
    const user = await User.findOne({email:email})
    if(user){
        bcrypt.compare(password, user.password, function(err, result) {
            if(err){
                res.status(500).json(err)
            }else{
                if(result){
                    const token = jwt.sign({
                        login_id : user.id,
                        login_email:user.email
                    }, process.env.PRIVATE_KEY, {expiresIn: '2d'})
                    res.status(200).json({msg:"User login Successfully",token:token})
                } else{
                    res.status(500).json({msg:"Credential Not Matched"})
                }
            }
           
        });
    }else{
        res.status(500).json({msg:"Credential Not Matched"})
    }
} catch (error) {
    
}
}
module.exports = {register,users,login}