import { Link } from "react-router-dom";
import styles from "./MoviesList.module.css";

const MoviesList = ({ movies, title, location }) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link
              className={styles.listItem}
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location },
              }}
            >
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
