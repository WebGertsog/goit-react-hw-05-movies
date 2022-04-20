import { useParams } from "react-router-dom";
import noPhoto from "../../img/No-Photo-Available-Male-2.webp";
import styles from "./Cast.module.css";

const IMG_URL = "https://image.tmdb.org/t/p/w300";

const Cast = ({ movie }) => {
  const castList = movie.credits.cast;

  return (
    <ul className={styles.cast__list}>
      {castList.map((cast) => (
        <li key={cast.id}>
          <img
            className={styles.cast__img}
            src={
              cast.profile_path
                ? `${IMG_URL}${cast.profile_path}`
                : `${noPhoto}`
            }
            alt={cast.original_name}
          />
          <p className={styles.cast__name}>{cast.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
