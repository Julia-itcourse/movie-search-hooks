import { useState, useEffect } from "react";
import { fetchMovieReviews } from "../../services/moviesApi";

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => fetchMovieReviews(movieId).then(setReviews));

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet</p>
      )}
    </>
  );
};

export default Reviews;
