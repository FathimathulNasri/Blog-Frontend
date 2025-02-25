import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './PostForm.css';



const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const token = localStorage.getItem("token");
      axios.get(`https://blog-backend-2od8.onrender.com/api/posts/${id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => {
          setTitle(res.data.title);
          setContent(res.data.content);
        })
        .catch(err => console.error(err));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = { title, content };

    if (id) {
      axios.put(`https://blog-backend-2od8.onrender.com/api/posts/${id}`, postData)
        .then(() => navigate('/blogUser'))
        .catch(err => console.error(err));
    } else {
      const token = localStorage.getItem("token");
      axios.post('https://blog-backend-2od8.onrender.com/api/posts/',postData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(() => {
          alert('Blog Created Successfully')
          navigate('/blogUser')

        })
        .catch(err => console.error(err));
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit Post' : 'Create Post'}</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="submit">Save</button>
      </form>
    </div>
  );
};

export default PostForm;
