import React from 'react';
import { HashRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';
import BlogPostList from './BlogPostList';
import BlogPostDetail from './BlogPostDetail';


const samplePosts = [
  {
    id: '1',
    title: 'Getting Started with React',
    content: '<p>React is a JavaScript library for building user interfaces.</p>',
    author: 'John Doe',
    date: '2023-01-01',
  },
  {
    id: '2',
    title: 'CSS Grid vs. Flexbox',
    content: '<p>Both CSS Grid and Flexbox are powerful layout tools.</p>',
    author: 'Jane Smith',
    date: '2023-02-15',
  },
  {
    id: '3',
    title: 'Accessibility in Web Development',
    content: '<p>Accessibility ensures your site is usable by everyone.</p>',
    author: 'Alex Lee',
    date: '2023-03-10',
  },
];

// Wrapper component to handle blog post detail page
const BlogPostPage = () => {
  const { id } = useParams();
  const post = samplePosts.find((p) => p.id === id);

  if (!post) {
    return <p>Blog post not found.</p>;
  }

  return (
    <BlogPostDetail
      title={post.title}
      content={post.content}
      author={post.author}
      date={post.date}
    />
  );
};

const App = () => (
  <Router>
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <Routes>
        <Route path="/" element={<BlogPostList posts={samplePosts} />} />
        <Route path="/posts/:id" element={<BlogPostPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
