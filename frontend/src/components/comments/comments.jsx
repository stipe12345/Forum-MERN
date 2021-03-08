import React, { useEffect, useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import UserContext from '../../context/userContext';
import Addcomment from '../addcomments/addcomments';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Comments=props=> {
  const { userData } = useContext(UserContext);
  const [post, setPost] = useState(props.post);
  const [comment,setComment]=useState();
  const history = useHistory();
  function pushlogin() {
    history.push('/login');
  }

  useEffect(() => {
    async function fetchData() {
        let data={post};
     const comms = await axios.post('/allcomments',data);
      setComment(comms.data.reverse())
    }
    fetchData();
  }, []);
  const appendComment = async (commentdata) => {
      console.log(commentdata)
    const Addcomment = await axios.post('/addcomment', commentdata);
    const Appendcomment = Addcomment.data;
    setComment((prevstate) => [ Appendcomment,...prevstate]);
  };
  return (
    <div className="comments">
      {!userData.user?(<h5>Morate se prijaviti za komentiranje</h5>):(<h3>Dajte svoj komentar:</h3>)}
      {
      !comment ? (
            <div>loading...</div>
          ) : (<>{userData.user?( <Addcomment submitHandler={appendComment} post={props.post}/>):(<div></div>)}
          {
            comment.map((comments) => {
              return (
                <div  className="commentbox" key={comments._id}>
                  <label>{comments.author}</label>
                  <p>{comments.text}</p>
                </div>
              
              )}
            )
            }
         
        </>
          )}
     </div>
  )
}

export default Comments;
