import { Link, useLocation } from "react-router-dom";
import styles from "./MoviesCard.module.css";

const IMG_URL = "https://image.tmdb.org/t/p/w300";

function MovieCard({ movie, sliceString }) {
  const location = useLocation();

  return (
    <>
      <li className={styles.movies__item}>
        <Link
          className={styles.movies__link}
          to={{ pathname: `/movies/${movie.id}`, state: { from: location } }}
        >
          <img
            src={`${IMG_URL}${movie.poster_path}`}
            alt={movie.title}
            className={styles.movies__img}
          />
          <div className={styles.movies__cardThumb}>
            <h3 className={styles.movies__title}>{sliceString(movie.title)}</h3>
            <p className={styles.movies__rating}>IMDb: {movie.vote_average}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default MovieCard;
