const express = require('express')
const router = express.Router()
const {addCategory,fetchCategory,fetchSingle} = require('../controller/productCategory')
const auth = require('../middleware/auth')
router.post('/category',auth,addCategory)
router.get('/category',auth,fetchCategory)
router.get('/category/:id',auth,fetchSingle)
module.exports = router