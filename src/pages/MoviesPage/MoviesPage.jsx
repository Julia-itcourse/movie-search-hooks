import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import SearchMoviesForm from "../../components/SearchMovieForm";
import { fetchMoviesBySearchQuery } from "../../services/moviesApi";
import MoviesList from "../../components/MoviesList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const history = useHistory();

  const searchQuery = new URLSearchParams(location.search).get("query");

  console.log("moviesPage", location);
  console.log("moviesPage", history);
  console.log("searchQuery", searchQuery);

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

// class MoviesPage extends Component {
//   state = {
//     movies: [],
//   }

//   componentDidMount() {
//     const { query } = getQueryParams(this.props.location.search)
//     if (query) {
//       fetchWithSearchQuery(query).then((movies) => this.setState({ movies }))
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("MoviesPage.componentDidUpdate ", this.props)
//     console.log("prevProps.props.location.search", prevProps.location.search)
//     const { query: prevQuery } = getQueryParams(prevProps.location.search)
//     const { query: nextQuery } = getQueryParams(this.props.location.search)
//     console.log("prevParams: ", prevQuery)
//     console.log("nextparams: ", nextQuery)
//     if (prevQuery !== nextQuery) {
//       console.log("searching...")
//       fetchWithSearchQuery(nextQuery).then((movies) =>
//         this.setState({ movies })
//         // .catch(error => console.log(error))
//       )
//     }
//   }

//   handleChangeQuery = (query) => {
//     console.log("Moviespage.handleChangeQuery" + query)
//     this.props.history.push({
//       pathname: this.props.location.pathname,
//       search: `query=${query}`,
//     })
//     console.log(this.props.history)
//   }

//   render() {
//     console.log("this.props.match.url", this.props.match.url);
//     const { movies } = this.state
//     return (
//       <div className = "container">
//         <Searchbox onSubmit={this.handleChangeQuery} />
//         {movies.length > 0 && (
//           <div>
//             <h1>Movies found</h1>
//             <ul>
//               {movies.map((movie) => (
//                 <li className = "listItem" key={movie.id}>
//                   <Link
//                     to={{
//                       pathname: `${this.props.match.url}/${movie.id}`,
//                       state: { from: this.props.location },
//                     }}
//                   >
//                     {movie.name || movie.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     )
//   }
// }
// //?как правильно написать через &&

// MoviesPage.propTypes = {
//   // bla: PropTypes.string,
// }

// MoviesPage.defaultProps = {
//   // bla: 'test',
// }

// export default withLog(MoviesPage)
