import React from 'react';
import { useOutletContext } from 'react-router-dom';
import styles from './MovieCast.module.css';

export const MovieCast = () => {
  const { credits } = useOutletContext();

  if (!credits || credits.length === 0) {
    return <div>No cast information available.</div>;
  }

  return (
    <div className={styles.castWrapper}>
      {credits.map(actor => (
        <div key={actor.id} className={styles.actor}>
          <img
            src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : 'https://via.placeholder.com/80x120?text=No+Image'}
            alt={actor.name}
            className={styles.actorImage}
          />
          <p className={styles.actorName}>{actor.name}</p>
          <p className={styles.actorCharacter}>{actor.character}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieCast;

