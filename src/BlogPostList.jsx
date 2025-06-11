import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostList = ({ posts }) => (
  <div>
    <h1>Blog Posts</h1>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default BlogPostList;
