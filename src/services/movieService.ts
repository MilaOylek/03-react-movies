import axios from 'axios';
import type { Movie } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

interface FetchMoviesResponse {
  results: Movie[];
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  try {
    const response = await axios.get<FetchMoviesResponse>(BASE_URL, {
      params: { query },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        Accept: 'application/json',
      },
    });

    return response.data.results;
  } catch (error) {
    console.error('Failed to fetch movies:', error);
    throw error;
  }
};
