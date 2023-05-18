const jwt = require('jsonwebtoken')
const auth = async(req,res,next)=>{
try {
    var token = req.headers.authorization.split(" ")[1]
    if(token){
       const loginUser = jwt.verify(token, process.env.PRIVATE_KEY)
console.log(loginUser);
        next();
    }else{
        res.status(500).json({msg:"Authorization Failed"})  
    }
        
} catch (error) {
    res.status(500).json({message: "Authorization failed"})
}
}
module.exports = auth;