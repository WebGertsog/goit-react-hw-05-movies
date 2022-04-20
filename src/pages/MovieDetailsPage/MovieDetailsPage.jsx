import { useState, useEffect } from "react";
import { Routes, Route, NavLink, useParams, Outlet } from "react-router-dom";

import Cast from "../../components/Cast";
import Rreviews from "../../components/Reviews";

import * as moviesAPI from "../../services/movies-api";
import styles from "./MovieDetailsPage.module.css";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesAPI.getMovieById(movieId).then(setMovie);
  }, [movieId]);
  return (
    <>
      {movie && (
        <>
          <div className={styles.detailPage}>
            <div className={styles.detailPage__sidebar}>
              <img
                src={`${IMG_URL}${movie.backdrop_path}`}
                alt={movie.original_title}
                className={styles.detailPage_img}
              />
            </div>
            <div>
              <h2 className={styles.detailPage__title}>{movie.title} </h2>

              <div className={styles.detailPage__details}>
                <div className={styles.detailPage__sidebarLeft}>
                  <p className={styles.detailPage__sidebarLeftText}>
                    <span className={styles.detailPage__span}>Rating:</span>
                  </p>
                  <p className={styles.detailPage__sidebarLeftText}>
                    <span className={styles.detailPage__span}>Genre:</span>
                  </p>
                  <p className={styles.detailPage__sidebarLeftText}>
                    <span className={styles.detailPage__span}>Country:</span>
                  </p>
                </div>
                <div className={styles.detailPage__sidebarRight}>
                  <p className={styles.detailPage__sidebarRightText}>
                    IMDb: {movie.vote_average}
                  </p>
                  <p className={styles.detailPage__sidebarRightText}>
                    {movie.genres.map(({ name }) => name).join(", ")}
                  </p>
                  <p className={styles.detailPage__sidebarRightText}>
                    {movie.production_countries
                      .map(({ name }) => name)
                      .join(", ")}
                  </p>
                </div>
              </div>

              <p className={styles.detailPage__description}>{movie.overview}</p>
            </div>
          </div>
          <div className={styles.detailPage__additional}>
            <h3 className={styles.detailPage__additionalTitle}>
              Additional information
            </h3>
            <ul className={styles.detailPage__additionalList}>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <p>/</p>
              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </ul>
            <Outlet />
          </div>
        </>
      )}

      <Routes>
        {movie && <Route path="cast" element={<Cast movie={movie} />} />}
        {/* <Route path="reviews" element={<Rreviews movie={movie} />} /> */}
      </Routes>
    </>
  );
}
export default MovieDetailsPage;
