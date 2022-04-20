import { Routes, Route } from 'react-router-dom';
import Container from './Container';
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import styles from './App.module.css';

function App() {
  return (
    <Container>
      <Navigation />
      <div className={styles.section}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        </Routes>
      </div>
    </Container>
  );
}

export default App;
