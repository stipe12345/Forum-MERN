import React, { useState,useContext } from 'react';
import UserContext from '../../context/userContext';
import { Link } from 'react-router-dom';
import Comments from '../comments/comments'
import AddComments from '../addcomments/addcomments'
import axios from 'axios';
import '../../App.css';
const Posts =props=> {
    const { userData } = useContext(UserContext);
    const [post,setPost]=useState(props.location.state);

        return ( <div className="post" key={post._id}>
             <Link id="back" className="button" to={`/`}> Povratak</Link>
            <h5>{post.author}</h5>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
            <Comments post={post._id}/>
          </div>);



    }

 
export default Posts;