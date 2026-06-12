const posts = [
  { postId: 1, likes: 100 },
  { postId: 2, likes: 200 }
];

const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

console.log("6.", totalLikes);

