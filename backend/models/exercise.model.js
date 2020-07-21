const mongoose =require('mongoose');

const Schema=mongoose.Schema;

const exerciseSchema=new Schema({
    userName:{required:true,type:String},
    description:{required:true,type:String},
    duration:{required:true,type:Number},
    date:{required:true,type:Date},},
   { timestamps:true,
});

const exercise=mongoose.model('Exercise',exerciseSchema);

module.exports=exercise;