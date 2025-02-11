import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/api';
import MovieReviewsList from '../MovieReviewsList/MovieReviewsList';
import Loading from '../Loading/Loading';
import css from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setRewviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const fetchDataReviews = async () => {
      if (!movieId) return;

      try {
        setLoading(true);
        const data = await getMovieReviews(movieId);
        setRewviews(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataReviews();
  }, [movieId]);

  return (
    <div className={css.reviews}>
      {loading && <Loading></Loading>}
      {!loading &&
        (reviews.length > 0 ? (
          <MovieReviewsList data={reviews}></MovieReviewsList>
        ) : (
          <p>We don`t have any rewiews for this movie</p>
        ))}
    </div>
  );
};

export default MovieReviews;
