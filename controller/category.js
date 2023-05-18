const Category = require('../model/category')
//add category
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
//Fetch All category
const fetchCategory = async(req,res)=>{
try {
    const allCategory = await Category.find({})
    res.status(200).json({data:allCategory})
} catch (error) {
    res.status(500).json(error)
}
}
//Fetch Single category
const fetchSingle = async(req,res)=>{
    try {
        const {id} = req.params
    const singleGet = await Category.findById(id) 
    if(singleGet){
        res.status(200).json(singleGet)
    } else{
        res.status(404).json({message: `cannot find any Category with ID ${id}`})
    }
   
    } catch (error) {
        res.status(500).json(error) 
    }
   
}
//update Single category
const updateSingle = async(req,res)=>{
    try {
        const {id} = req.params
    const product = await Category.findByIdAndUpdate(id,req.body)  
    if(!product){
        res.status(404).json({message: `cannot find any product with ID ${id}`})
    }else{
        const updatedProduct = await Category.findById(id);
        res.status(200).json(updatedProduct);
    }
   
    } catch (error) {
        const {id} = req.params
        res.status(404).json({message: `cannot find any Category with ID ${id}`})
    } 
}
//Delete Single category
const deleteSingle = async(req,res)=>{
    try {
        const {id} = req.params
        const deletedCat = await Category.findByIdAndDelete(id)
        if(deletedCat){
            res.status(200).json(deletedCat);
        } else{
            res.status(404).json({message: `cannot find any Category with ID ${id}`})
        }
        
    } catch (error) {
        res.status(404).json({message: `cannot find any Category with ID ${id}`})
    }
}
module.exports = {addCategory,fetchCategory,fetchSingle,updateSingle,deleteSingle }