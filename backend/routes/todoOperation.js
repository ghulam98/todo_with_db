const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Todo = require('../models/todo');
const getUser = require('../middleware/getUser');


//Route1: get all users todo: GET /api/todo/fetchalltodo: Loging required
router.get('/fetchalltodo', getUser,  async(req,res)=>{
    try {
        let userId  = req.user.userId
        const todo = await Todo.find({user:userId})
        console.log(userId, todo)

        res.status(200).json(todo)
    } catch (error) {
        res.status(500).send("Internal Server Error",error.message)
    }
       
        
    })


//Route2: get all users todo: GET /api/todo/fetchalltodo: Loging required
router.post('/addtodo', getUser, [
    body('title',"Title must be more than 2 char").isLength({ min: 3 }),
    body('desc',"Description should be more than 4 charecter").isLength({ min: 5 }),
    ], 
    async(req,res)=>{
    //for validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false,errors: errors.array() });
    }

    try {
       const {title, desc,category} = req.body
        const todo = new Todo({
            title, desc, user:req.user.userId,category
        })
        const savedtodo = await todo.save()
        res.status(200).json({success:true,...savedtodo._doc})
    } catch (error) {
        res.status(500).json({msg:"Internal Server Error",error:error.message})
    }
       
        
    })


//Route3: delete todo: GET /api/todo/id: Loging required
router.delete('/deletetodo/:id', getUser, 
    async(req,res)=>{

    try {
    //first check the this id is exist or not
    let todo = await Todo.findById(req.params.id);
    if(!todo){ return res.status(404).send("Page not found")}

    //now time to check user is correct or not
    if(todo.user.toString() !== req.user.userId){ return res.status(401).send("Not allowed")}

    //now every thing varified so lets update
    todo = await Todo.findByIdAndDelete(req.params.id)
    res.status(200).json({Success:"todo delete successfully", todo})
    } catch (error) {
        res.status(500).send("Internal Server Error",error.message)
    }
       
        
    })

//Route4: update todo: GET /api/updatetodo/id: Loging required
router.put('/updatetodo/:id', getUser,[
    body('title',"Title must be more than 2 char").isLength({ min: 3 }),
    body('desc',"Description should be more than 4 charecter").isLength({ min: 5 }),
    ] ,
    async(req,res)=>{

    try {
    //first check the this id is exist or not
    let todo = await Todo.findById(req.params.id);
    if(!todo){ return res.status(404).send("Page not found")}

    //now time to check user is correct or not
    if(todo.user.toString() !== req.user.userId){ return res.status(401).send("Not allowed")}
    
    const data = {title, desc} = req.body
    //now every thing varified so lets update
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, {$set: data}, {new:true})
    res.status(200).json({Success:"todo update successfully", updatedTodo})
    } catch (error) {
        res.status(500).json({success:true, error:error.message})
    }
       
        
    })


module.exports = router