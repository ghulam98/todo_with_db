const mongoose = require('mongoose');
mongoose.set("strictQuery", false);


const CONN = ()=>{
mongoose.connect('mongodb://127.0.0.1:27017/todo')
.then(()=>{
    console.log("connection ok")
}).catch((err)=>{
    console.log("not connected!",err)
})
}
module.exports = CONN;