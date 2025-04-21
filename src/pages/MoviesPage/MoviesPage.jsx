import React, { useEffect, useState } from 'react';
import { searchMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import styles from './MoviesPage.module.css';

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [inputValue, setInputValue] = useState(query);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query === '') {
      setMovies([]);
      return;
    }

    const getData = async () => {
      setLoading(true);
      try {
        const movies = await searchMovies(query, 1);
        setMovies(movies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [query]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      setSearchParams({});
      setMovies([]);
      return
    };
    setSearchParams({ query: inputValue.trim() });
  };

  return (
    <div className={styles.moviesWrapper}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search for movies"
        />
        <button className={styles.searchButton} type="submit">
          Search
        </button>
      </form>

      {loading && <div className={styles.spinner}>Loading...</div>}

      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
