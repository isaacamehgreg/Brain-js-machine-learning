const express = require('express');
const router = express.Router();



router.get('/', (req,res)=>{
    res.send('we are here using router post');
});

router.get('/specific', (req,res)=>{
    res.send('this is a specific post');
});




module.exports = router;