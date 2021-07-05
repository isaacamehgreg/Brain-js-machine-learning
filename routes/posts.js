const express = require('express');
const router = express.Router();
const Post = require('../models/Post');



//get all post
router.get('/', async (req,res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({msg:err})
    }
});



//create post
router.post('/post', async(req,res)=>{
    console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    })
    try{
    const savedPost = await post.save();
      res.json(savedPost);
    }catch(err){
      res.json({msg : err})
    }
});


//a single post
router.get('/:postId',   (req,res) => {
     console.log(req.params.postId);
});


module.exports = router;