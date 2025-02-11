import MovieReviewsItem from '../MovieReviewsItem/MovieReviewsItem';
import css from './MovieReviewsList.module.css';

const MovieReviewsList = ({ data }) => {
  return (
    <ul className={css.reviewList}>
      {data.map(review => (
        <li key={review.id} className={css.reviewItem}>
          <MovieReviewsItem review={review}></MovieReviewsItem>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviewsList;
