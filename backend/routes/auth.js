const express = require('express')
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const getUser = require('../middleware/getUser');


// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post("/createuser",    [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),  
    ],
    async (req, res)=>{
    //If any params Error lets check

    console.log(req.body)
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        let user  = await User.findOne({email:req.body.email})
        if(user){
            return res.status(400).json({success, msg:"User is already exist with same mail."})
        }

        //Create new user
        const {name,email,password} = req.body
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        user = await User.create({name,email,password:secPass })
        success = true


        return res.status(200).json({success, msg:"user created successfully!"})
    } catch (error) {
        console.log(error)
        res.status(500).json({error, "jj":"lllll"})
    }

})


// ROUTE 2: Login user using: POST "/api/auth/login". No login required
router.post("/login",    [
   
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),  
    ],
    async (req, res)=>{
    //If any params Error lets check

    console.log(req.body)
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        let user  = await User.findOne({email:req.body.email})
        if(!user){
            return res.status(400).json({success, msg:"Please enter correct credentials."})
        }
        console.log(user)
        //Create new user
        const {email,password} = req.body
        const hashPass = await bcrypt.compare(password, user.password)
        if(!hashPass){
            return res.status(400).json({msg:"Please enter correct credentials."})
        }

        //generating token using JWT
        const data = {"userId":user.id, email:user.email}
        const token = jwt.sign(data, "JWT_SECRET");
        success = true
        return res.status(200).json({success,token, msg:"user login successfully!"})
    } catch (error) {
        console.log(error)
        res.status(500).json({success, msg:error})
    }

})


//Route3: Authenticate a user: POST /api/auth/getuser: Loging required
router.post('/getuser', getUser,  async(req,res)=>{
    try {
        console.log("wnsdkl",req.user)
        let userId  = req.user.userId
        const user = await User.findById(userId).select("-password")//fins using id and fetch all data except password
        console.log(user,"OOOOO",userId)
        if(!user){
            return res.status(401).send("User is not valid for")
        }
        res.send(user)
    } catch (error) {
        res.status(500).send("Internal Server Error/")
    }
       
        
})



module.exports = router