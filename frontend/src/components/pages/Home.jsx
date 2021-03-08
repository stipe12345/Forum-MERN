import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/userContext';
import AddPosts from '../addposts/addposts';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Home() {
  const { userData } = useContext(UserContext);
  const [post, setPost] = useState();
  const[flag,setFlag]=useState(false);
  const history = useHistory();
  function pushlogin() {
    history.push('/login');
  }

  useEffect(() => {
    async function fetchData() {
      
      const posts = await axios.get('/allposts');
      setPost(posts.data.reverse());
    }
    fetchData();
  }, []);
  const appendComment = async (postdata) => {
    setFlag(!flag);
    const Addpost = await axios.post('/addposts', postdata);
    const Appendpost = Addpost.data;
    setPost((prevstate) => [ Appendpost,...prevstate]);
  };
  const showform=()=>{
      setFlag(!flag);
   
  }
  return (
    <div className="postcontainer">
      {userData.user ? (
        <>
          <h5>Dobrodošli {userData.user.displayName}</h5>
        {flag?<AddPosts submitHandler={appendComment}/>:<button className="button" onClick={showform}>Dodaj novu objavu</button>}
          <div className="container">
            <h1>Najnovije objave</h1>{!post ? (
            <div>loading...</div>
          ) : (
            post.map((posts) => {
              return (
                <div key={posts._id} className="postframe">
                  <h6>Objavio:{posts.author}</h6>
                  <h2>{posts.title}</h2>
                  <p>{posts.text}</p>
                  <Link
                    className="button"
                    to={{ pathname: `/posts/${posts._id}`, state: posts }}
                  >
                    Otvori
                  </Link>
                </div>
              );
            })
          )
          }
          </div>
        </>
      ) : (
        <>
          <h2>Nisi prijavljen</h2>
          <button className="button" onClick={pushlogin}>
            Prijavi se
          </button>
          <div className="container">
            <h1>Najnovije objave</h1>{!post ? (
            <div>loading...</div>
          ) : (
            post.map((posts) => {
              return (
                <div key={posts._id} className="postframe">
                  <h6>Objavio:{posts.author}</h6>
                  <h2>{posts.title}</h2>
                  <p>{posts.text}</p>
                  <Link
                    className="button"
                    to={{ pathname: `/posts/${posts._id}`, state: posts }}
                  >
                    Otvori
                  </Link>
                </div>
              );
            })
          )
          }
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
