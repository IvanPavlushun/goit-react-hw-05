import React, { useEffect, useState } from "react";
import { fetchTrendMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList"
import styles from "./HomePage.module.css";

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const movies = await fetchTrendMovies();
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className={styles.box}>
      <h1 className={styles.header}>Trending Today</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
