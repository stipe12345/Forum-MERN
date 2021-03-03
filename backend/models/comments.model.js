const mongoose=require('mongoose');

const commentsSchema= new mongoose.Schema({
    author:{type:String,required:true},
    text:{type:String,required:true},
    post:{type:String,required:true}
})
module.exports = Comments  = mongoose.model("comments", commentsSchema);