import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from './MovieList.module.css';


export const MovieList = ({movies}) => {
    const location = useLocation();
  return (
    <ul className={styles.movieList}>
        {movies.map(movie => ( 
            <li key={movie.id} className={styles.movieListItem}>
            <Link className={styles.movieLink} state={location} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default MovieList;
