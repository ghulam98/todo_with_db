const mongoose = require('mongoose');
mongoose.set("strictQuery", false);


const CONN = ()=>{
mongoose.connect(`${process.env.BASE_URL}/${process.env.DB}`)
.then(()=>{
    console.log("connection ok ")
}).catch((err)=>{
    console.log("not connected!",err)
})
}
module.exports = CONN;