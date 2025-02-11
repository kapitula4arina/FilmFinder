import { Link, useLocation } from 'react-router-dom';
import css from './MovieListItem.module.css';

const MovieListItem = ({ data: { id, title, poster_path }, currentPage }) => {
  const location = useLocation();
  const maxLength = 17;

  const defaultImg =
    'https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster';

  return (
    <div className={css.searchMoviesItem}>
      <Link to={`/movies/${id}`} state={{ from: location, page: currentPage }}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : defaultImg
          }
          width={250}
          height={350}
          className={css.searchImg}
        />
        <div className={css.searchTitle}>
          {title.length <= maxLength
            ? title
            : `${title.substring(0, maxLength)}...`}
        </div>
      </Link>
    </div>
  );
};

export default MovieListItem;
