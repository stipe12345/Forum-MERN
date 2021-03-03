import React, { useState,useContext } from 'react';
import UserContext from '../../context/userContext';
import { Link } from 'react-router-dom';
import Comments from '../comments/comments'
import AddComments from '../addcomments/addcomments'
import axios from 'axios';
const Posts =props=> {
    const { userData } = useContext(UserContext);
    const [post,setPost]=useState(props.location.state);
console.log(post)
        return ( <div key={post._id}>
             <Link className="btn btn-info" to={`/`}>Povratak</Link>
            <label>{post.author}</label>
            <label>{post.title}</label>
            <p>{post.text}</p>
            {userData.user?<><AddComments/><Comments/></>:<Comments/>}
          </div>);



    }

 
export default Posts;