const router = require('express').Router();
const auth = require('../middleware/auth');
const Comments = require('../models/comments.model');

router.post("/addcomment",async(req,res)=>{
    let text1=req.body.text;
    let author1=req.body.author;
    let post1=req.body.post;
    const newComment=new Comments({author:author1,text:text1,post:post1});
    const savedComment=await newComment.save();
    res.json(savedComment);
})
router.post("/allcomments",async(req,res)=>{
    let postid=req.body.post;
    const Allcomms=await Comments.find({post:postid})
    console.log(Allcomms)
    res.json(Allcomms); 
})
module.exports= router;