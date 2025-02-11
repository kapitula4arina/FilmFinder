import css from './Loading.module.css';

const Loading = () => {
  return (
    <div className={css.loading}>
      <p className={css.loadText}>Loading...</p>
    </div>
  );
};

export default Loading;
