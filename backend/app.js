const express=require ('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();
const userRoutes=require('./routes/user.js');
const exerciseRoutes=require('./routes/exercise.js');

const app=express();

app.use(cors());
app.use(express.json());

const port=5000||process.env.port;


// const uri='mongodb+srv://USA:aliheider5689@@merndata.olbir.gcp.mongodb.net/MernData?retryWrites=true&w=majority';
mongoose.connect('mongodb://localhost:27017/mern-stack', {useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex:true,});

// '+encodeURIComponent('aliheider5689%40')+'
// mongoose.connect(uri,{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
//     console.log('Connected')
// })
// .catch(err=> console.log(err))

app.use('/exercise',exerciseRoutes);
app.use('/user',userRoutes);

app.listen(port,()=>{
    console.log('running on port 5000');
})
