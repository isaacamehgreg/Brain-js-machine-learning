const express = require('express');
const router = express.Router();
const Post = require('../models/Post');




router.get('/', (req,res)=>{
    res.send('we are here using router post');
});

router.get('/specific', (req,res)=>{
    res.send('this is a specific post');
});

//create
router.post('/post',(req,res)=>{
    console.log(req.body);
    const post = new Post({
        title: req.body.tittle,
        description: req.body.description,
    })
    post.save()
    .then(data=>{
        res.json(data);
    })
    .catch(err => res.json({msg: err}))
});


module.exports = router;