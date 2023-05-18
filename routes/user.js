const express = require('express')
const router = express.Router()
const {register,users,login} = require('../controller/user')
const auth = require('../middleware/auth')
router.post('/register',register)
router.get('/users',auth,users)
router.post('/login',login)
module.exports = router