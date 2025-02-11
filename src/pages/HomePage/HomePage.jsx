import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../services/api';
import css from './HomePage.module.css';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <main>
      <div className={css.movies}>
        <h1 className={css.title}>Trending today</h1>
        <MovieList data={movies} />
      </div>
    </main>
  );
};

export default HomePage;
