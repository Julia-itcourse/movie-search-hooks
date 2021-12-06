import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import SearchMoviesForm from "../../components/SearchMovieForm";
import { fetchMoviesBySearchQuery } from "../../services/moviesApi";
import MoviesList from "../../components/MoviesList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const history = useHistory();

  const searchQuery = new URLSearchParams(location.search).get("query");

  const handleFormSubmit = (searchQuery) => {
    history.push({ ...location, search: `query=${searchQuery}` });
  };

  useEffect(() => {
    if (!searchQuery) return;
    fetchMoviesBySearchQuery(searchQuery).then(setMovies);
  }, [searchQuery]);

  return (
    <div className={styles.container}>
      <SearchMoviesForm onSubmitForm={handleFormSubmit} />
      <ToastContainer />
      {movies.length > 0 && (
        <MoviesList
          location={location}
          movies={movies}
          title={"Found movies"}
        />
      )}
    </div>
  );
};

export default MoviesPage;
