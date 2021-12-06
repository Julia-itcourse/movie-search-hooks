import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import styles from "./LoaderSpinner.module.css";

const LoaderSpinner = () => {
  return (
    <div className={styles.container}>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
};

export default LoaderSpinner;
