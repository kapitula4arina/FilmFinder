import MovieListItem from '../MovieListItem/MovieListItem';
import css from './MovieList.module.css';

const MovieList = ({ data, currentPage }) => {
  return (
    <ul className={css.searchMoviesList}>
      {data.map(movie => (
        <li key={movie.id} className={css.item}>
          <MovieListItem data={movie} currentPage={currentPage}></MovieListItem>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
