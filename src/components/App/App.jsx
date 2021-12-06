import React, { Suspense, lazy } from "react";
import routes from "../../routes";
import { Switch, Route } from "react-router-dom";
import Layout from "../Layout";
import LoaderSpinner from "../LoaderSpinner";

const HomePage = lazy(() =>
  import("../../pages/HomePage" /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import("../../pages/MoviesPage" /* webpackChunkName: "movies-page" */),
);
const MoviePage = lazy(() =>
  import("../../pages/MoviePage" /* webpackChunkName: "movie-page" */),
);

const App = () => (
  <Layout>
    <Suspense fallback={<LoaderSpinner />}>
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
