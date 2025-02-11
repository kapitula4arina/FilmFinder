import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBox from '../../components/SearchBox/SearchBox';
import { searchMovies } from '../../services/api';
import css from './MoviesPage.module.css';
import Loading from '../../components/Loading/Loading';
import MovieList from '../../components/MovieList/MovieList';

const MoviesPage = () => {
  const [dataMovies, setDataMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const pageFormUrl = parseInt(searchParams.get('page') || 1);
    setCurrentPage(pageFormUrl);
  }, [searchParams]);

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      try {
        setLoading(true);

        const data = await searchMovies(query, currentPage);
        setDataMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query, currentPage]);

  const updateSearchParams = (key, value) => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set(key, value);
    setSearchParams(updatedParams);
  };

  const handleSubmit = newQuery => {
    if (query === newQuery) return;

    setSearchParams(prevParams => {
      const updatedParams = new URLSearchParams(prevParams);
      updatedParams.set('query', newQuery);
      updatedParams.set('page', 1);
      return updatedParams;
    });

    setCurrentPage(1);
    setDataMovies([]);
  };

  const handlePageChange = newPage => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    updateSearchParams('page', newPage);

    window.scrollTo(0, 0);
  };

  return (
    <main>
      <div className={css.search}>
        <SearchBox handleSubmit={handleSubmit}></SearchBox>
        {loading && <Loading></Loading>}
        <MovieList data={dataMovies} currentPage={currentPage}></MovieList>

        {dataMovies.length > 0 && (
          <div className={css.pagination}>
            {currentPage > 1 && (
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className={css.BtnPrev}
              >
                Prev
              </button>
            )}
            <span>
              {currentPage} of {totalPages}
            </span>
            {currentPage !== totalPages && (
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className={css.BtnNext}
              >
                Next
              </button>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default MoviesPage;
