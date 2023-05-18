const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 7000
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
const userRoute = require('./routes/user')
// routes
 app.use('/api',userRoute)

mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGOOES_URL)
  .then(() => console.log('Database is Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})