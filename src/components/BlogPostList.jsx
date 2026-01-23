import React, { useState } from "react";
import { Link } from "react-router-dom";
import { posts } from "../data";

const BlogPostList = () => {
  const [query, setQuery] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    post.content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div aria-live="polite">
      <input
        type="hidden"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {filteredPosts.length === 0 && (
        <p>No posts found.</p>
      )}

      {filteredPosts.map((post) => (
        <div key={post.id}>
          <h2>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h2>
          <p>{post.content.substring(0, 100)}...</p>
          <small>{post.date}</small>
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;
