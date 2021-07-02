const express = require('express');

const app = express();


//MIDDLEWARES
// app.use('/post', ()=>{
//     console.log('this is a middleware that giude the post routes')
//   //  pass next to it too continiue
// })




//ROUTES
//get,post,delete,patch,put
app.get('/', (req,res)=>{         
    res.send('this is home');
});

app.get('/post', (req,res)=>{         
    res.send('this is post');
});




//to listene
app.listen('3000');
