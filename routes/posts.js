const express = require('express');
const router = express.Router();

router.get('/posts', (req,res)=>{
    ress.send('we are here using router post')
});





module.export = router;