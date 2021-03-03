const router = require('express').Router();
const auth = require('../middleware/auth');
const Posts = require('../models/posts.model');
router.post("/addposts",async(req,res)=>{
    let text1=req.body.text;
    let author1=req.body.author;
    let title1=req.body.title;
    const newPost=new Posts({author:author1,text:text1,title:title1});
    const savedPost=await newPost.save();
    res.json(savedPost);
})
router.get("/allposts",async(req,res)=>{
    const Allposts=await Posts.find({})
    res.json(Allposts); 
})

module.exports=router;