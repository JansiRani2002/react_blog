export let posts = [
  {
    id: '1',
    title: 'Getting Started with React',
    content: 'React is a JavaScript library for building user interfaces.',
    author: 'John Doe',
    date: '2023-01-01',
  },
  {
    id: '2',
    title: 'CSS Grid vs. Flexbox',
    content: 'Both CSS Grid and Flexbox are powerful layout tools.',
    author: 'Jane Smith',
    date: '2023-02-15',
  },
];

export function addPost(newPost) {
  const id = (posts.length + 1).toString();
  posts.push({ id, ...newPost });
}

export function updatePost(id, updatedPost) {
  const index = posts.findIndex((p) => p.id === id);
  if (index !== -1) {
    posts[index] = { id, ...updatedPost };
  }
}
