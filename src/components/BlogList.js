import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Bloglist.css';


const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://blog-backend-2od8.onrender.com/api/posts')
      .then(res => {
        setPosts(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      <Link to="/create">Create New Post</Link>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <Link to={`/edit/${post._id}`}>Edit</Link>
            <button onClick={() => handleDelete(post._id)}>Delete</button>
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
};

export default BlogList;

// import React from "react";
// // import { Link } from 'react-router-dom';
// import './Bloglist.css';


// function BlogList({ posts }) {
//   return (
//     <div>
//       {posts.map(post => {
//         return       <div className="List" key={post.id}>
//           <h2>{post.title}</h2>
//           <p>{post.excerpt}</p>
//           {/* <Link to={`/post/${post.id}`}>Read more</Link> */}

        
//         </div>
// })}
//     </div>
//   );
// }

// export default BlogList;



