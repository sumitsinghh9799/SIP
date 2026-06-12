const movies = [
  { title: "Movie A", rating: 8.5 },
  { title: "Movie B", rating: 6.0 }
];

const topMovies = movies
  .filter(movie => movie.rating > 8)
  .map(movie => movie.title);

console.log("7.", topMovies);


