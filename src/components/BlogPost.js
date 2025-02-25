import React from 'react';
// import { useParams } from 'react-router-dom';

function BlogPost({ posts }) {
  // const { id } = useParams();
  // const post = posts.find(p => p.id === parseInt(id));

  // if (!post) return <p>Post not found</p>;

  return (
  <>
  {
   posts.map(post=>{
    return(
    <div key={post.id}>
      
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
   )}) 
  }
    
    </>

  );
}

export default BlogPost;
