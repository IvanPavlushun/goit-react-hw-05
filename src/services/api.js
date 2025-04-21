import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTdjOWJmYjI5YTMzZDVlMzFkYzZlZDU0MmY2NGNlNiIsIm5iZiI6MTc0NTE5MjE4Mi41MzMsInN1YiI6IjY4MDU4NGY2MzdhNzIyYjg4Njg5ZjgxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nlpE92JpWanrx0CDuE_vINp2HQMlKPbUNhWnmnspQ2I',
    accept: 'application/json',
  },
});

export const fetchTrendMovies = async () => {
  const response = await api.get(`/trending/movie/day?language=en-US`);
  return response.data.results;
};

export const searchMovies = async (query, page = 1) => {
  const response = await api.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`
  );
  return response.data.results;
};

export const getMovieDetails = async (id) => {
  const response = await api.get(`/movie/${id}?language=en-US`);
  return response.data;
};

export const getMovieCredits = async (id) => {
  const response = await api.get(`/movie/${id}/credits?language=en-US`);
  return response.data.cast;
};

export const getMovieReviews = async (id, page = 1) => {
  const response = await api.get(
    `/movie/${id}/reviews?language=en-US&page=${page}`
  );
  return response.data.results;
}







