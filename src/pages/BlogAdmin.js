import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BlogAdmin.css';


const BlogAdmin = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://blog-backend-2od8.onrender.com/api/posts')
      .then(res => {
        setPosts(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='main-container'>
      <h2 className="h2">Recipie Blog</h2>
      {/* <Link to="/create">Create New Post</Link> */}
      <ul className='home-container'>
        {posts.map(post => (
          <li key={post._id} >
            <h3>{post.title}</h3>
            <p>{post.content.split(/\s+/).slice(0,30).join(" ")}</p>
            <br></br>
            {/* <div className="view-btn"> <Link to={'/view'} state={{post}} className="view-btn"><button className="view-btn">Get Recipie</button></Link> */}
            {/* </div> */}
            <div className='btn-container'>
            <Link to="/view" state={{post}} className="view-btn"> Get Recipie</Link>
            <Link to={`/edit/${post._id}`} className="edit-btn">Update</Link>
            <button onClick={() => handleDelete(post._id)} className="delete-btn">Delete</button>
            </div>
          </li>
        ))}
      </ul>      
    </div>
  );
  function handleDelete(id) {
    axios.delete(`https://blog-backend-2od8.onrender.com/api/posts/${id}`)
      .then(() => {
        setPosts(posts.filter(post => post._id !== id));
      })
      .catch(err => console.error(err));
  }

}

export default BlogAdmin;


// import { useEffect, useState } from 'react';
// import BlogList from '../components/BlogList';

// function Home() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//   fetch('http://localhost:5000/api/posts')

//     fetch('https://api/posts')
//       .then(response => response.json())
//       .then(data => setPosts(data));
//   }, []);

//   return <BlogList posts={posts} />;
// }

// export default Home;

