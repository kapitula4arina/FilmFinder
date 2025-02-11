import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={css.notFound}>
      <Link to="/" className={css.goHome}>
        Go Home
      </Link>
      <div className={css.notFoundText}>Not Found</div>
    </div>
  );
};

export default NotFoundPage;
