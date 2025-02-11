import MovieCastItem from '../MovieCastItem/MovieCastItem';
import css from './MovieCastList.module.css';

const MovieCastList = ({ data }) => {
  return (
    <div className={css.cast}>
      <ul className={css.castList}>
        {data.map(actor => (
          <li key={actor.cast_id} className={css.castItem}>
            <MovieCastItem data={actor}></MovieCastItem>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCastList;
