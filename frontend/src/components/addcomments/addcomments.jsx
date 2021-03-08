import React, { useState,useContext } from 'react';
import axios from 'axios';
import UserContext from '../../context/userContext';
import '../../App.css';
const AddComments =props=>  {
    const [text,setText]=useState();
    const [post,setPost]=useState(props.post);
    
    const { userData } = useContext(UserContext);
  const submit = async (e) => {
    e.preventDefault();
    console.log(post)
    const author = userData.user.displayName;
    const postdata = { post, text, author };
    clearinput();
    props.submitHandler(postdata)
    
  }
  const clearinput =()=>{
    Array.from(document.querySelectorAll("textarea")).forEach(
      input => (input.value = "")
    );
    setText("");
  }
    return (
      <form className="addpostform" onSubmit={submit}>
        <textarea id="commentarea"  onChange={e=>setText(e.target.value)} />
        <input id="objavi" className="button" type="submit" value="Objavi " />
      </form>
    );
  }


export default AddComments;
