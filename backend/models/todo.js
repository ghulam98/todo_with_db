const mongoose = require('mongoose')
const { Schema } = mongoose;

const todoSchema = new Schema({
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        title:{
            type:String,
            required:true
        },
        desc:{
            type:String,
            required:true,
        },
        category:{
            type:String,
            required:true,
            default:'normal'
        },
        status:{
            type:Boolean,
            required:true,
            default:false
        },
        delete:{
            type:Boolean,
            required:true,
            default:false
        },

    }, 
    {
        timestamps:true
    }
);

module.exports = mongoose.model('todo',todoSchema);