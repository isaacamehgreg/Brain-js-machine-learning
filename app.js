const express = require('express');

const mongoose = require('mongoose');

require('dotenv/config');

const app = express();

const postRoutes = require('./routes/posts');


//MIDDLEWARES
// app.use('/post', ()=>{
//     console.log('this is a middleware that giude the post routes')
//   //  pass next to it too continiue
// })




//ROUTES
//get,post,delete,patch,put


app.get('/', (req,res)=>{res.send('this is home page')});

//app.use('/posts', postRoutes);

//connect to db
mongoose.connect(process.env.DB_CONNECTION, {userNewUrlParser: true},()=> console.log('connected to db')

);


//to listene
app.listen('3000');
