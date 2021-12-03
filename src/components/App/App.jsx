import React, { Suspense, lazy } from "react";
import routes from "../../routes";
import { Switch, Route } from "react-router-dom";
import Layout from "../Layout";

const HomePage = lazy(() =>
  import("../../pages/HomePage" /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import("../../pages/MoviesPage" /* webpackChunkName: "movies-page" */),
);
const MoviePage = lazy(() =>
  import("../../pages/MoviePage" /* webpackChunkName: "movie-page" */),
);

const Cast = lazy(() =>
  import("../Cast" /* webpackChunkName: "movie-page-cast" */),
);

const Reviews = lazy(() =>
  import("../Reviews" /* webpackChunkName: "movie-page-reviews" */),
);

const App = () => (
  <Layout>
    <Suspense fallback={<h2>Loading...</h2>}>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <MoviesPage />
        </Route>
        <Route path="/movies/:movieId">
          <MoviePage />
        </Route>
      </Switch>
    </Suspense>
  </Layout>
);

export default App;
