import React from 'react';
import { useOutletContext } from 'react-router-dom';
import styles from './MovieReviews.module.css';

export const MovieReviews = () => {
  const { reviews } = useOutletContext();

  if (!reviews || reviews.length === 0) {
    return <div>No reviews available.</div>;
  }

  return (
    <div className={styles.reviewsWrapper}>
    <h2>Reviews</h2>
    <ul className={styles.reviewsList}>
      {reviews.map(review => (
        <li key={review.id} className={styles.reviewItem}>
          <h3 className={styles.reviewAuthor}>{review.author}</h3>
          <p className={styles.reviewContent}>{review.content}</p>
        </li>
      ))}
    </ul>
  </div>
);
};

export default MovieReviews;
