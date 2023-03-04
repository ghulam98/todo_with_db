const express = require('express')
var cors = require('cors')
const CONN = require('./db')
const app = express()
require('dotenv').config()

//stablishing DB connection
CONN()
app.use(cors())
app.use(express.json())
app.use('/api/auth',require('./routes/auth'))
app.use('/api/todo',require('./routes/todoOperation'))
app.get('/',(req,res)=>{
    res.json({page:"home PAGE",success:true})
})



app.listen(process.env.PORT,()=>{
    console.log(`Server is running on prot=${process.env.PORT}`)
})
