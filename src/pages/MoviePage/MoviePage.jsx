import {
  Route,
  NavLink,
  useParams,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieById } from "../../services/moviesApi";
import Cast from "../../components/Cast";
import Reviews from "../../components/Reviews";
import style from "./MoviePage.module.css";

const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();
  let { movieId } = useParams();

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <div>
      {movie && (
        <div className={style.container}>
          <h1>{movie.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
          <p>Rating: {movie.vote_average}</p>
          <p>Description: {movie.overview}</p>
          <h3>Additional information</h3>
          <ul>
            <li>
              <NavLink to={`${url}/cast`} className={style.link}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to={`${url}/reviews`} className={style.link}>
                Reviews
              </NavLink>
            </li>
          </ul>

          <Route path={`${path}/cast`}>
            <Cast movieId={movieId} />
          </Route>
          <Route path={`${path}/reviews`}>
            <Reviews movieId={movieId} />
          </Route>
        </div>
      )}
    </div>
  );
};

export default MoviePage;
