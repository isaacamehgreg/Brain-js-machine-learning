const express = require('express');

const mongoose = require('mongoose');

require('dotenv/config'); //env guy

const app = express();

//import post route
const postsRoute = require('./routes/posts');


//MIDDLEWARES
// app.use('/post', ()=>{
//     console.log('this is a middleware that giude the post routes')
//   //  pass next to it too continiue
// })




//ROUTES
//get,post,delete,patch,put


app.get('/', (req,res)=>{
    res.send('this is home page')
});



//post routers
app.use('/posts', postsRoute);
















//connect to db
mongoose.connect(process.env.DB_CONNECTION, {userNewUrlParser: true},()=> console.log('connected to db'));


//to listene
app.listen('3000');
