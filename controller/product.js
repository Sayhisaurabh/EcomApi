const Product = require('../model/product')

// Add Product 
const addProduct = async(req,res)=>{
    try {
        const {name,cat_id,desc,price} = req.body
        
        const isAlready = await Product.findOne({name:name})
        if(isAlready){
            res.status(200).json({message:"Product Name is Already Filled"})
        }else{
            const add = await Product.create({
           name,cat_id,desc,price,image:req.file.path
            })
            res.status(200).json({data:add,message:"Product Added Successfully"})
        }
       
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// Get Product 
const getProduct = async(req,res)=>{
    try {
        const all = await Product.find({}).populate('cat_id')
        res.status(200).json({data:all,message:"All Products"})
    } catch (error) {
        res.status(500).json(error)
    }
}

// Get Single Product 
const getSingleProduct = async(req,res)=>{
    try {
        const single = await Product.findById(req.params.id)
        res.status(200).json({data:single,message:"Single Product"})
    } catch (error) {
        res.status(500).json(error)
    }
}

// Update Single Product 
const updateSingleProduct = async(req,res)=>{
    try {
        const update = await Product.findByIdAndUpdate(req.params.id,req.body)
        if(!update){
            res.status(404).json({message: `cannot find any product with ID ${req.params.id}`})
        }else{
            const updatedProduct = await Product.findById(req.params.id);
            res.status(200).json({data:updatedProduct,message:"Product Updated Successfully"})
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
}

// Delete Single Product 
const deleteSingleProduct = async(req,res)=>{
    try {
        const {id} = req.params
        const isNot = await Product.findById(id)
        if(isNot){
            const del = await Product.findByIdAndDelete(id)
            res.status(200).json({data:del,message:"Product Deleted"})
        }else{
            res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
       
    } catch (error) {
        res.status(500).json(error.message) 
    }
}
module.exports ={addProduct,getProduct,getSingleProduct,updateSingleProduct,deleteSingleProduct}