import { useState } from "react";
import styles from "./SearchMovieForm.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../../utils/notify";

const SearchMoviesForm = ({ onSubmitForm }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (query === "") {
      console.log("toast should be here");
      notify("Enter a title of the movie you are looking for!");
      return;
    }

    onSubmitForm(query);
    setQuery("");
  };

  // const notify = (message) => toast(message);

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmitForm} className={styles.form}>
        <label className={styles.label}>
          <span className={styles.labelText}>Movie title</span>
          <input
            className={styles.input}
            type="text"
            value={query}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </>
  );
};

export default SearchMoviesForm;
