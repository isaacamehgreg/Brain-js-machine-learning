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
router.get('/:postId',  async (req,res) => {
    try{
    const post = await Post.findById(req.params.postId);
    res.send(post);
    }catch(err){
        res.json({msg : err})
    }
});

router.delete('/:postId', async (req,res) => {
    try{
    const deletePost = await Post.remove({_id: req.params.postId});
        res.json(deletePost);
    }catch(err){  
        res.json({msg : err})
    }
})


module.exports = router;