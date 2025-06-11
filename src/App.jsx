// import React from 'react';
// import { HashRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';
// import BlogPostList from './components/BlogPostList';
// import BlogPostDetail from './components/BlogPostDetail';


// const samplePosts = [
//   {
//     id: '1',
//     title: 'Getting Started with React',
//     content: '<p>React is a JavaScript library for building user interfaces.</p>',
//     author: 'John Doe',
//     date: '2023-01-01',
//   },
//   {
//     id: '2',
//     title: 'CSS Grid vs. Flexbox',
//     content: '<p>Both CSS Grid and Flexbox are powerful layout tools.</p>',
//     author: 'Jane Smith',
//     date: '2023-02-15',
//   },
//   {
//     id: '3',
//     title: 'Accessibility in Web Development',
//     content: '<p>Accessibility ensures your site is usable by everyone.</p>',
//     author: 'Alex Lee',
//     date: '2023-03-10',
//   },
// ];

// // Wrapper component to handle blog post detail page
// const BlogPostPage = () => {
//   const { id } = useParams();
//   const post = samplePosts.find((p) => p.id === id);

//   if (!post) {
//     return <p>Blog post not found.</p>;
//   }

//   return (
//     <BlogPostDetail
//       title={post.title}
//       content={post.content}
//       author={post.author}
//       date={post.date}
//     />
//   );
// };

// const App = () => (
//   <Router>
//     <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
//       <Routes>
//         <Route path="/" element={<BlogPostList posts={samplePosts} />} />
//         <Route path="/posts/:id" element={<BlogPostPage />} />
//       </Routes>
//     </div>
//   </Router>
// );

// export default App;
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
