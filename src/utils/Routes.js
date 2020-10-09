import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "components/Header";
import Home from "containers/Home";
import MovieDetails from "containers/MovieDetails";

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Redirect exact from="/movie" to="/" />
      <Route exact path="/" component={Home} />
      <Route path="/movie/:movieId" component={MovieDetails} />
      <Route path="*" component={Home} />
    </Switch>
  </Router>
);

export default Routes;
