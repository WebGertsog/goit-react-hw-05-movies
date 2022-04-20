import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link className={styles.navigation__link} to="/">
        Home
      </Link>
      <Link className={styles.navigation__link} to="/movies">
        Search
      </Link>
    </nav>
  );
}

export default Navigation;
