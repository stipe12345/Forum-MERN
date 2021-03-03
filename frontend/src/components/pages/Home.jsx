import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/userContext';
import AddPosts from '../addposts/addposts';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Home() {
  const { userData } = useContext(UserContext);
  const [post, setPost] = useState();
  const history = useHistory();
  function pushlogin() {
    history.push('/login');
  }

  useEffect(() => {
    async function fetchData() {
      const posts = await axios.get('/allposts');
      setPost(posts.data);
    }
    fetchData();
  }, []);
  const appendComment = async (postdata) => {
    const Addpost = await axios.post('/addposts', postdata);
    const Appendpost = Addpost.data;
    setPost((prevstate) => [...prevstate, Appendpost]);
  };
  return (
    <div>
      {userData.user ? (
        <>
          <h1>Welcome {userData.user.displayName}</h1>
          {!post ? (
            <div>loading...</div>
          ) : (
            post.map((posts) => {
              return (
                <div key={posts._id}>
                  <label>{posts.author}</label>
                  <label>{posts.title}</label>
                  <p>{posts.text}</p>
                  <Link
                    className="btn btn-info"
                    to={{ pathname: `/posts/${posts._id}`, state: posts }}
                  >
                    Otvori
                  </Link>
                </div>
              );
            })
          )}
          <AddPosts submitHandler={appendComment} />
        </>
      ) : (
        <>
          <h2>You are not logged in</h2>
          <button onClick={pushlogin}>Log in</button>
          {!post ? (
            <div>loading...</div>
          ) : (
            post.map((posts) => {
              return (
                <div key={posts._id}>
                  <label>{posts.author}</label>
                  <label>{posts.title}</label>
                  <p>{posts.text}</p>
                  <Link
                    className="btn btn-info"
                    to={{ pathname: `/posts/${posts._id}`, state: posts }}
                  >
                    Otvori
                  </Link>
                </div>
              );
            })
          )}
        </>
      )}
    </div>
  );
}

export default Home;
