const mongoose=require('mongoose');

const postsSchema= new mongoose.Schema({
    author:{type:String,required:true},
    title: { type: String, required: true},
    text:{type:String,required:true},
})
module.exports = Posts = mongoose.model("posts", postsSchema);