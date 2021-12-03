import { Link } from "react-router-dom";
import styles from "./MoviesList.module.css";

const MoviesList = ({ movies, title }) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link className={styles.listItem} to={`/movies/${movie.id}`}>
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
