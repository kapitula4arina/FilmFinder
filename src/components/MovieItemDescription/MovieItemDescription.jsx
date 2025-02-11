import css from './MovieItemDescription.module.css';

const MovieItemDescription = ({
  data: {
    title,
    overview,
    poster_path,
    release_date,
    vote_average,
    genres,
    origin_country,
  },
}) => {
  const defaultImg =
    'https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster';

  return (
    <div className={css.movieItemDescription}>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : defaultImg
        }
        width={250}
        alt={title}
        className={css.movieImg}
      />

      <h2 className={css.movieTitle}> {title}</h2>
      <p className={css.movieText}>Vote average: {vote_average}.</p>
      <p className={css.movieText}>Country: {origin_country}.</p>
      <p className={css.movieText}>Release: {release_date}.</p>
      <div className={css.movieGenres}>
        <span className={css.movieText}>Genres: </span>
        <ul className={css.movieGenresList}>
          {genres.map(genre => (
            <li key={genre.id} className={(css.movieText, css.movieGenresItem)}>
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
      <p className={css.movieOverview}>Overview: {overview}</p>
    </div>
  );
};

export default MovieItemDescription;
