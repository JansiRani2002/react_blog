// import React from 'react';
// import { Link } from 'react-router-dom';

// const BlogPostList = ({ posts }) => (
//   <div>
//     <h1>Blog Posts</h1>
//     <ul>
//       {posts.map((post) => (
//         <li key={post.id}>
//           <Link to={`/posts/${post.id}`}>{post.title}</Link>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// export default BlogPostList;
import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data';

const BlogPostList = () => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <Link to="/create"><button>Create New Post</button></Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: '20px' }}>
            <h2>{post.title}</h2>
            <p>By {post.author}</p>
            <Link to={`/posts/${post.id}`}>View</Link> | <Link to={`/edit/${post.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPostList;
