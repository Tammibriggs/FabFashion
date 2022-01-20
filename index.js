const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Cors = require('cors')
const morgan = require('morgan')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const stripeRoute = require('./routes/stripe')

// app config
const app = express()
const port = process.env.PORT || 8800
dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('DB connection successfull!'))
.catch((err) => {
  console.log(err)
})

const corsOption = {
  origin: process.env.ALLOWED_HOST.slice(1, -1).split(' '),
  optionsSuccessStatus: 200
}

// middleware
app.use(Cors(corsOption))
app.use(express.json())
app.use(morgan('common'))
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/products', productRoute)
app.use('/api/cart', cartRoute)
app.use('/api/orders', orderRoute) 
app.use('/api/checkout', stripeRoute) 

app.get('/', (req,res) => res.status(200).json('Welcome to my api'))

// listener
app.listen(port, () => {
  console.log('Backend server is running')
})
