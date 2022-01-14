const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')

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
app.use(morgan('common'))
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)

// listener
app.listen(port, () => {
  console.log('Backend server is running')
})
