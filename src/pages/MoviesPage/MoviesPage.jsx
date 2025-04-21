import React, { useEffect, useState } from 'react';
import { searchMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import styles from './MoviesPage.module.css';

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? ''; 
  const [movies, setMovies] = useState([]);
  const loading = useState(false);

  
  useEffect(() => {
    if (query === '') {
      setMovies([]); 
      return;
    }

    const getData = async () => {
      try {
        const movies = await searchMovies(query, 1);
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [query]);

  return (
    <div className={styles.moviesWrapper}>
      <form className={styles.searchForm}>
        <input
          className={styles.searchInput}
          type="text"
          value={query}
          onChange={e => {
            searchParams.set('query', e.target.value);
            setSearchParams(searchParams);
          }}
          placeholder="Search for movies"
        />
        <button className={styles.searchButton} type="submit">
          Search
        </button>
      </form>

      {loading && <div className="spinner"></div>}

      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
