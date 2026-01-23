import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetail from './components/BlogPostDetail';
import BlogPostForm from './components/BlogPostForm';
import { posts, addPost, updatePost } from './data';

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    addPost(data);
    navigate('/');
  };

  return <BlogPostForm onSubmit={handleSubmit} />;
};

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === id);

  const handleSubmit = (data) => {
    updatePost(id, data);
    navigate('/');
  };

  return <BlogPostForm post={post} onSubmit={handleSubmit} />;
};

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<BlogPostList />} />
      <Route path="/posts/:id" element={<BlogPostDetail />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/edit/:id" element={<EditPost />} />
    </Routes>
  </BrowserRouter>
);

export default App;
