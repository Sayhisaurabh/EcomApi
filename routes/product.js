const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const upload = require('../middleware/uploadImage')
const {addProduct,getProduct,getSingleProduct,updateSingleProduct,deleteSingleProduct} = require('../controller/product')

router.post('/product',upload.single('image'),auth,addProduct)
router.get('/product',auth,getProduct)
router.get('/product/:id',auth,getSingleProduct)
router.patch('/product/:id',auth,updateSingleProduct)
router.delete('/product/:id',auth,deleteSingleProduct)
module.exports = router