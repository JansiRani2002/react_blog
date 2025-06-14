// import React from 'react';
// import styles from './BlogPostDetail.module.css';

// const BlogPostDetail = ({ title, content, author, date }) => {
//   if (!title || !content || !author || !date) {
//     return <p className={styles.notFound}>Blog post not found.</p>;
//   }

//   const formattedDate = new Date(date).toLocaleDateString('en-US', {
//     month: 'long',
//     day: 'numeric',
//     year: 'numeric',
//   });

//   return (
//     <article className={styles.blogPostDetail}>
//       <h1 className={styles.title}>{title}</h1>
//       <p className={styles.author}>By {author}</p>
//       <p className={styles.date}>Published on {formattedDate}</p>
//       <div
//         className={styles.content}
//         dangerouslySetInnerHTML={{ __html: content }}
//       />
//     </article>
//   );
// };

// export default BlogPostDetail;
import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../data';

const BlogPostDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p><strong>Author:</strong> {post.author}</p>
      <p><strong>Date:</strong> {post.date}</p>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPostDetail;
