import { useEffect, useRef, useState } from 'react';
import { useParams, Outlet, NavLink, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../services/api';
import clsx from 'clsx';
import css from './MovieDetailsPage.module.css';
import BackLink from '../../components/BackLink/BackLink';
import MovieItemDescription from '../../components/MovieItemDescription/MovieItemDescription';
import Loading from '../../components/Loading/Loading';

const buildLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (!movieId) return;

    window.scrollTo(0, 0);
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <Loading />;

  return (
    <main>
      <div className={css.movieDetailes}>
        <div className={css.detailes}>
          <BackLink to={backLink.current}>Go Back</BackLink>
          <MovieItemDescription data={movie} />
        </div>
        <ul className={css.linkList}>
          <li className={css.linkListItem}>
            <NavLink to="cast" className={buildLinkClass}>
              Cast
            </NavLink>
          </li>
          <li className={css.linkListItem}>
            <NavLink to="reviews" className={buildLinkClass}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </main>
  );
};

export default MovieDetailsPage;
