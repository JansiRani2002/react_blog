import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { posts } from "../data";

import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const BlogPostDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  if (!post) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p><strong>Author:</strong> {post.author}</p>
      <p><strong>Date:</strong> {post.date}</p>
      <p>{post.content}</p>

      <CommentList comments={comments} />
      <CommentForm onSubmit={addComment} />
    </div>
);
};

export default BlogPostDetail;
