// import React, { useState, useEffect } from 'react';
// import styles from './BlogPostForm.module.css';

// const BlogPostForm = ({ post, onSubmit }) => {
//   const [title, setTitle] = useState(post?.title || '');
//   const [content, setContent] = useState(post?.content || '');
//   const [author, setAuthor] = useState(post?.author || '');
//   const [date, setDate] = useState(post?.date || '');
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     if (post) {
//       setTitle(post.title);
//       setContent(post.content);
//       setAuthor(post.author);
//       setDate(post.date);
//     }
//   }, [post]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     if (!title) newErrors.title = 'Required';
//     if (!content) newErrors.content = 'Required';
//     if (!author) newErrors.author = 'Required';
//     if (!date) newErrors.date = 'Required';
    
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//     } else {
//       setErrors({});
//       setIsSubmitting(true);
//       await onSubmit({ title, content, author, date });
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <form className={styles.blogPostForm} onSubmit={handleSubmit}>
//       <div className={styles.formGroup}>
//         <label htmlFor="title">Title</label>
//         <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
//         {errors.title && <p className={styles.error}>{errors.title}</p>}
//       </div>

//       <div className={styles.formGroup}>
//         <label htmlFor="content">Content</label>
//         <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />
//         {errors.content && <p className={styles.error}>{errors.content}</p>}
//       </div>

//       <div className={styles.formGroup}>
//         <label htmlFor="author">Author</label>
//         <input id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
//         {errors.author && <p className={styles.error}>{errors.author}</p>}
//       </div>

//       <div className={styles.formGroup}>
//         <label htmlFor="date">Publication Date</label>
//         <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
//         {errors.date && <p className={styles.error}>{errors.date}</p>}
//       </div>

//       <button type="submit" disabled={isSubmitting}>
//         {isSubmitting ? 'Submitting...' : 'Submit'}
//       </button>
//     </form>
//   );
// };

// export default BlogPostForm;
import React, { useState, useEffect } from 'react';

const BlogPostForm = ({ post, onSubmit }) => {
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');
  const [author, setAuthor] = useState(post?.author || '');
  const [date, setDate] = useState(post?.date || '');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setAuthor(post.author);
      setDate(post.date);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!title) newErrors.title = 'Required';
    if (!content) newErrors.content = 'Required';
    if (!author) newErrors.author = 'Required';
    if (!date) newErrors.date = 'Required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onSubmit({ title, content, author, date });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
      </div>

      <div>
        <label>Content:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        {errors.content && <p style={{ color: 'red' }}>{errors.content}</p>}
      </div>

      <div>
        <label>Author:</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
        {errors.author && <p style={{ color: 'red' }}>{errors.author}</p>}
      </div>

      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        {errors.date && <p style={{ color: 'red' }}>{errors.date}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogPostForm;
