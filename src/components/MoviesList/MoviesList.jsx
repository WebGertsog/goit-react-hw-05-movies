import sliceString from "../../services/slise-string";
import MoviesCard from "../MoviesCard";
import styles from "./MoviesList.module.css";

function MoviesList({ movies }) {
  return (
    <>
      <ul className={styles.movies__list}>
        {movies.results.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} sliceString={sliceString} />
        ))}
      </ul>
    </>
  );
}

export default MoviesList;
