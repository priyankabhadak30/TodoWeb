import React from 'react'
import { useNavigate } from 'react-router-dom';


function Detailspage() {
  const param = useParams();
  const navigate = useNavigate();
  const localPosts = JSON.parse(localStorage.getItem('posts')) || [];
  const post = localPosts.find((item) => item.id == param.id);

  if (!post) return <div className="detail">Post not found.</div>;

  return (
    <div className="detail">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Home
      </button>
    </div>
  );
}
export default Detailspage





