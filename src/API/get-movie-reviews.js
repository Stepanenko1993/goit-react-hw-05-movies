async function getMovieReviews(movieId) {
  const key = '6a2a388e1c2ace081292a5fe16cb0ea9';
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  const filter = `?api_key=${key}&language=en-US&page=1`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
}

export default getMovieReviews;
