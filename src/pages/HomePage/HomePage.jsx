import PropTypes from "prop-types";
import { Link, useRouteMatch } from "react-router-dom";
import { fetchTrendingMovies } from "../../services/moviesApi";
import { useState, useEffect } from "react";
import styles from "./HomePage.module.css";
import MoviesList from "../../components/MoviesList";

const baseUrl = "https://api.themoviedb.org/3/trending/all/day?";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies(baseUrl).then(setTrendingMovies);
  }, []);

  return (
    <div className={styles.container}>
      {trendingMovies && (
        <MoviesList title="Popular Movies" movies={trendingMovies} />
      )}
    </div>
  );
};

export default HomePage;
