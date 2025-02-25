import React from 'react';
// import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './Blog.css';


const Blog = () => {
  // const [posts, setPosts] = useState([]);
  const location=useLocation();
  const post=location.state?.post;
  console.log(post);

  // function handleDelete(id) {
  //   axios.delete(`http://localhost:5000/api/posts/${id}`)
  //     .then(() => {
  //       setPosts(posts.filter(post => post._id !== id));
  //     })
  //     .catch(err => console.error(err));
  // }

    return (
    <div className='m-container'>
      <h2>Blog Posts</h2>
      <ul className="blog-container">
          <li key={post._id} className='lists'>
            <h3>{post.title}</h3>
            <p>{post.content}</p><br></br>
            <span>Created at: {post.createdAt}</span>

            {/* <Link to={`/edit/${post._id}`}>Edit</Link> */}
            {/* <button onClick={() => handleDelete(post._id)}>Delete</button> */}
          </li>
      </ul>
    </div>
  );
};

export default Blog;