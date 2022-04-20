import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import * as moviesAPI from "../../services/movies-api";
import MoviesList from "../../components/MoviesList";
import toast, { Toaster } from "react-hot-toast";

function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (query) {
      moviesAPI.getMoviesByQuery(query).then(setMovies);
    }
  }, [query]);

  // Handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.currentTarget.elements.query.value.trim();

    if (query === "") {
      return toast.error("Please enter a valid search name!");
    }
    setSearchParams({ query });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Enter movie name"
        />
        <button type="submit"></button>
      </form>

      {movies && <MoviesList movies={movies} />}
    </>
  );
}

export default MoviesPage;
