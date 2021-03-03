const router = require('express').Router();
const auth = require('../middleware/auth');
const Comments = require('../models/comments.model');

router.post("/addcomment",auth,async(req,res)=>{
    let text=req.body.comment;
    let author=req.body.user;
    let post=req.body.post;
    const newComment=new Comments({author,text,post});
    const savedComment=await newComment.save();
    res.json(savedComment);
})
router.get("/allcomments",async(req,res)=>{
    let postid=req.body.post;
    const Allcomms=await Comments.find({postid})
    res.json(Allcomms); 
})
module.exports= router;