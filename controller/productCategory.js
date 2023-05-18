const Category = require('../model/productCategory')
const addCategory = async(req,res)=>{
    try {
        const {name} = req.body
        const isFilled = await Category.findOne({name})
        if(isFilled){
            res.status(500).json({msg:"Category Name Already Exists"}) 
        }else{
            const addAction = await Category.create({
                name:name
            })
            res.status(200).json({msg:"Product Category Added Successfully",Data:addAction})
        }
       
    } catch (error) {
        res.status(500).json(error)
    }
}
const fetchCategory = async(req,res)=>{
try {
    const allCategory = await Category.find({})
    res.status(200).json({data:allCategory})
} catch (error) {
    res.status(500).json(error)
}
}
const fetchSingle = async(req,res)=>{
    try {
        const {id} = req.params
    const singleGet = await Category.findById(id)  
    res.status(200).json(singleGet)
    } catch (error) {
        res.status(500).json(error) 
    }
   
}
module.exports = {addCategory,fetchCategory,fetchSingle }