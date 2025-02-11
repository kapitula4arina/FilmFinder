import axios from 'axios';

const META_ENV = import.meta.env;

const TOKEN_API = META_ENV.VITE_TOKEN_API;
const BASE_URL = META_ENV.VITE_BASE_URL;

axios.defaults.baseURL = BASE_URL;

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    Authorization: `Bearer ${TOKEN_API}`,
  },
});

export const getTrendingMovies = async () => {
  const response = await axiosInstance.get(`/trending/movie/week`);
  return response.data.results;
};

export const searchMovies = async (query, page = 1) => {
  const response = await axiosInstance.get('/search/movie', {
    params: { query, include_adult: false, language: 'en-US', page },
  });
  return response.data;
};

export const getMovieDetails = async movieId => {
  const response = await axiosInstance.get(`/movie/${movieId}`);
  return response.data;
};

export const getMovieCast = async movieId => {
  const response = await axiosInstance.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

export const getMovieReviews = async movieId => {
  const response = await axiosInstance.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};
