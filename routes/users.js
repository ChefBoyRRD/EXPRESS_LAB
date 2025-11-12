const express = 
require('express');

const router =
express.Router();

router.get('/', (req,res)=>{
res.send('User List');
});
router.get('/new',(req,res)=>{
    res.send('New User Form');
});
router.get('/posts',(req,res)=>{
    res.send('Post new');
})
router.get('/location',(req,res)=>{
    res.send('Post location please');
})
module.exports = router;