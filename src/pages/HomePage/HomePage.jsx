import { useState, useEffect } from "react";
import * as moviesAPI from "../../services/movies-api";
import MoviesList from "../../components/MoviesList";
import styles from "./HomePage.module.css";

function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesAPI.getTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <h2 className={styles.homepage_title}>The most popular films of today</h2>
      {movies && <MoviesList movies={movies} />}
    </>
  );
}

export default HomePage;
