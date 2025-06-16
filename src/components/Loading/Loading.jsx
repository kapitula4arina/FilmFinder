import css from './Loading.module.css';
import { FaSpinner } from 'react-icons/fa';

const Loading = () => {
  return (
    <div className={css.loading}>
      <FaSpinner className={css.spinner} />
      <p className={css.loadText}>Loading...</p>
    </div>
  );
};

export default Loading;
