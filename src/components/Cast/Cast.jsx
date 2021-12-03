import { useState, useEffect } from "react";
import { fetchMovieCast } from "../../services/moviesApi";

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState(null);

  useEffect(() => fetchMovieCast(movieId).then(setCast));

  return (
    <>
      {cast && (
        <ul>
          {cast.map((actor) => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                alt={`${actor.name}`}
              />
              <p>Name: {actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
