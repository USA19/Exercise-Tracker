
const Exercise=require('../models/exercise.model');


exports.getExercises=async (req,res,next)=>{
    try{
       
    const exercises=await Exercise.find();
    res.json(exercises);}
    catch(err){
        console.log('i am here in get Exercises');
        res.status(400).json(err);
    }
    };


    
exports.getExercise=async( req,res,next)=>{
    try{
      
    const exercise=await Exercise.findById(req.params.id);
    res.json({exercise});}
    catch(err){
       
        console.log('i am here in get Exercise');
        res.status(400).json(err);
    }
}
exports.deleteExercise=async( req,res,next)=>{
    try{
    await Exercise.findByIdAndDelete(req.params.id);
    res.json('exercise Deleted');}
    catch(err){
        console.log('i am here in delete Exercise');
        res.status(400).json(err);
    }
}


exports.updateExercise=async (req,res,next)=>{
    try{
    const exercise=await Exercise.findById(req.params.id);
    if (exercise){
        exercise.userName=req.body.userName;
        exercise.description=req.body.description;
        exercise.duration=Number(req.body.duration);
        exercise.date=Date.parse(req.body.date);
   
   await exercise.save();
    }
   res.json('exercise Added');}
   catch(err){
    console.log('i am here in update Exercise');
       res.status(400).json(err);
   }
}

exports.postExercise=async (req,res,next)=>{
   try{
        const userName=req.body.userName;
        const description=req.body.Description;
        const duration=Number(req.body.duration);
        const date=Date.parse(req.body.Date);
        const exercise=new Exercise({userName,description,duration,date});
       await exercise.save();
       res.json('exercise Added');}
       catch(err){
        console.log('i am here in post Exercise');
           res.status(400).json(err);
       }
    }