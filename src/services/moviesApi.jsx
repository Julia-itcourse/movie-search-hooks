import axios from "axios";

const apiKey = "36a03f1455514d20be8aff6b16886aa2";

export const fetchTrendingMovies = (url) => {
  return axios.get(url + "api_key=" + apiKey).then((res) => res.data.results);
};

export const fetchMovieById = (id) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`,
    )
    .then((res) => res.data);
};

export const fetchMoviesBySearchQuery = (searchQuery) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
    )
    .then((res) => res.data.results);
};

export const fetchMovieCast = (movieId) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`,
    )
    .then((res) => res.data.cast);
};

export const fetchMovieReviews = (movieId) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US`,
    )
    .then((res) => res.data.results);
};
