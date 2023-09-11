const User=require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const  SECRET  = process.env.SECRET_KEY

module.exports={
    register: async(req,res)=>{
        try{
            const user=new User(req.body)
            const newUser= await user.save()
            const userToken=jwt.sign({id:newUser._id},SECRET)
            res.status(201)
                .cookie("userToken",userToken,{httpOnly:true})
                .json({message:"Registered with Success"})
        }
        catch(err){
            res.status(400).json({error:err})
        }
    }
    ,
    login: async(req, res) => {
            const user = await User.findOne({ email: req.body.email });
            if(user==null){
                return res.status(400).json({error:'account unavailable check your email or register'})
            }
            const correctPassword=await bcrypt.compare(req.body.password,user.password)
            if(!correctPassword){
                //console.log(req.body.password);
                return res.status(400).json({error:'wrong password'})
            }
            const userToken=jwt.sign({id:user._id},SECRET)
            res.cookie("userToken",userToken,{httpOnly:true})
                .json({message:'Logged in with Success'})
        },
        logout: (req,res)=>{
            res.clearCookie('userToken')
            res.status(200).json({message:"Logged out with Success"})
        }
        
        
}