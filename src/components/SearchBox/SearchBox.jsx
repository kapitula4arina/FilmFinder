import css from './SearchBox.module.css';

const SearchBox = ({ handleSubmit }) => {
  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.elements.query.value;

    if (!query.trim()) return;

    handleSubmit(query);
    form.reset();
  };
  return (
    <form onSubmit={onSubmit} className={css.searchForm}>
      <input
        type="text"
        name="query"
        className={css.searchInput}
        placeholder="Movie title"
      />
      <button type="submit" className={css.searchBtn}>
        Search
      </button>
    </form>
  );
};

export default SearchBox;
