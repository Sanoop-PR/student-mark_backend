require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./config/db')
const router = require('./routes/route')

//create express app
const app = express()

// use package to app
app.use(cors())
app.use(express.json())
app.use(router)

// create port where app should listen
const PORT = process.env.PORT || 3000

// run app 
app.listen(PORT,()=>{
    console.log(`app started at port:${PORT}`)
})


// resolve get req to localhost:3000
app.get('/',(req,res)=>{
    res.status(200).json("server  started!!!")
})
