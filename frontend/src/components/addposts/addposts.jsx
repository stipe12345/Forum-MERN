import React, { useState,useContext } from 'react';
import axios from 'axios';
import UserContext from '../../context/userContext';

const AddPosts =props=>  {
    const [title,setTitle]=useState();
    const [text,setText]=useState();
    const { userData } = useContext(UserContext);
  const submit = async (e) => {
    e.preventDefault();
    const author = userData.user.displayName;
    const postdata = { title, text, author };
    clearinput();
    props.submitHandler(postdata)
    
  }
  const clearinput =()=>{
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    Array.from(document.querySelectorAll("textarea")).forEach(
      input => (input.value = "")
    );
    setTitle("");
    setText("");
  }
    return (
      <form onSubmit={submit} className="addpostform">
        <h3>Naslov</h3>
        <input
          type="text"
          onChange={e=>setTitle(e.target.value)}
        />
        <h3>Opis</h3>
        <textarea  onChange={e=>setText(e.target.value)} />
        <input className="button" type="submit" value="Objavi" />
      </form>
    );
  }


export default AddPosts;
