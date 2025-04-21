import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/api';
import styles from './MovieReviews.module.css';

export const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getMovieReviews(movieId, 1);
        setReviews(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [movieId]);

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
