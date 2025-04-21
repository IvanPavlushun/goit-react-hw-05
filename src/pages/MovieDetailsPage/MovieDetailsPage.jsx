import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../services/api';
import { Link, NavLink, Outlet } from 'react-router-dom';
import styles from './MovieDetailsPage.module.css';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const goBackRef = useRef(location.state ?? `/movies`);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  if (loading) {
    return <div className={styles.loadingText}>Loading...</div>;
  }

  return (
    <div className={styles.movieDetailsWrapper}>
     <Link to={goBackRef.current}>Go back to movies</Link>
     <h1 className={styles.movieTitle}>{movieDetails.title}</h1>
      <img className={styles.movieImage} src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
      <p className={styles.movieOverview}>{movieDetails.overview}</p>
      <p className={styles.releaseDate}>
        <strong>Release Date:</strong> {movieDetails.release_date}
      </p>
      <p className={styles.genres}>
        <strong>Genres:</strong> {movieDetails.genres.map(genre => genre.name).join(', ')}
      </p>
      <nav className={styles.navLinks}>
        <NavLink to='cast'>Cast</NavLink>
        <NavLink to='reviews'>Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;