import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";
const API_KEY = "d5a85bc456dc831d1326e0db3a2ce97a";

async function getMovies(url = "") {
  const { data } = await axios.get(url);
  return data;
}

export function getTrendingMovies() {
  return getMovies(`/3/trending/movie/day?api_key=${API_KEY}`);
}
export function getMoviesByQuery(query) {
  return getMovies(
    `/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
}
export function getMovieById(movieId) {
  return getMovies(
    `/3/movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=reviews,credits,videos`
  );
}
