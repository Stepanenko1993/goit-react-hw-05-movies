async function getTrending() {
  const key = '6a2a388e1c2ace081292a5fe16cb0ea9';
  const url = 'https://api.themoviedb.org/3/trending/all/day';
  const filter = `?api_key=${key}`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
}

export default getTrending;
