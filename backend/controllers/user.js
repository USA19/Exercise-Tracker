const User=require('../models/user.model');


exports.getUser=async(req,res,next)=>{
   try{
    const user=await User.find();
    res.json(user);
    }
   
   catch(err){
    res.status(400).json(err);
   }

}
exports.postUser= async (req,res,next)=>{
    try{
        const userName=req.body.userName; //userNam
        const user=new User({userName});
        const result=  await user.save();
        res.json(result);
    } 
    catch(err){
        res.status(400).json(err)
       console.log(err);
    }
    };

