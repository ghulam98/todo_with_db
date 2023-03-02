const express = require('express')
var cors = require('cors')
const CONN = require('./db')
const app = express()
const PORT = 3000

//stablishing DB connection
CONN()
app.use(cors())
app.use(express.json())
app.use('/api/auth',require('./routes/auth'))
app.use('/api/todo',require('./routes/todoOperation'))
app.get('/',(req,res)=>{
    res.json({page:"home PAGE",success:true})
})



app.listen(PORT,()=>{
    console.log(`Server is running on prot=${PORT}`)
})
