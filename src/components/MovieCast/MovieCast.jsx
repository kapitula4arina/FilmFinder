import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/api';
import MovieCastList from '../MovieCastList/MovieCastList';
import Loading from '../Loading/Loading';
import css from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieCast = async () => {
      try {
        setLoading(true);
        const data = await getMovieCast(movieId);
        setActors(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div className={css.cast}>
      {loading && <Loading></Loading>}
      {!loading &&
        (actors.length > 0 ? (
          <MovieCastList data={actors}></MovieCastList>
        ) : (
          <p>Sorry, nothing found</p>
        ))}
    </div>
  );
};

export default MovieCast;
