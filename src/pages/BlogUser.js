import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BlogUser.css';
import { Link } from 'react-router-dom';


const BlogUser = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
    try{
    const token = localStorage.getItem("token");
    const response = await axios.get("https://blog-backend-2od8.onrender.com/api/posts/blogsusr", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setBlogs(response.data);
  } catch (error) {
    alert("Error fetching blogs");
  }
};
  fetchBlogs();
  }, []);

  
  

  
//   const [posts, setPosts] = useState([]);
  // const location=useLocation();
  // const post=location.state?.post;
  // console.log(post);

//   function handleDelete(id) {
//     axios.delete(`http://localhost:5000/api/posts/${id}`)
//       .then(() => {
//         setPosts(posts.filter(post => post._id !== id));
//       })
//       .catch(err => console.error(err));
//   }


return (
  <div>
    <h1>Your Blogs</h1>
            <Link to="/create"> <button className="head-btn">Create Blog </button></Link>
  
    {blogs.map((blog) => (
      <>
      <div key={blog._id}>
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
      </div>
    
    <Link to={`/edit/${blogs._id}`} className="edit-btn">Update</Link><br></br>
    <button onClick={() => handleDelete(blog._id)} className="delete-btn">Delete</button>
    </>
  ))}  </div>
);
function handleDelete(id) {
    axios.delete(`https://blog-backend-2od8.onrender.com/api/posts/${id}`)
      .then(() => {
        setBlogs(blogs.filter(post => blogs._id !== post.id));
      })
      .catch(err => console.error(err));
  }


};


export default BlogUser;