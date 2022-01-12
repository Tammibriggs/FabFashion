const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoute = require('./routes/user')

// app config
const app = express()
const port = process.env.PORT || 8800
dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('DB connection successfull!'))
.catch((err) => {
  console.log(err)
})

// middleware
app.use(express.json())
app.use('/api/users', userRoute)

// listener
app.listen(port, () => {
  console.log('Backend server is running')
})