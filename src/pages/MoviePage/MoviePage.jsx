import {
  Route,
  Link,
  NavLink,
  useParams,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import { useState, useEffect, lazy } from "react";
import { fetchMovieById } from "../../services/moviesApi";
import style from "./MoviePage.module.css";

const Cast = lazy(() =>
  import("../../components/Cast" /* webpackChunkName: "movie-page-cast" */),
);

const Reviews = lazy(() =>
  import(
    "../../components/Reviews" /* webpackChunkName: "movie-page-reviews" */
  ),
);

const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();
  let { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  const [prevLocation] = useState(location?.state?.from ?? "/");

  return (
    <div>
      {movie && (
        <div className={style.container}>
          <Link className = {style.goBack} to={prevLocation}>Go back</Link>
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
              <NavLink
                className={style.link}
                activeClassName={style.activeLink}
                to={{
                  pathname: `${url}/cast`,
                  state: { from: location },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                className={style.link}
                activeClassName={style.activeLink}
                to={{
                  pathname: `${url}/reviews`,
                  state: { from: location },
                }}
                className={style.link}
              >
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
