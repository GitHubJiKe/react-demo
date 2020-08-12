import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";

export default () => (
  <Switch>
    <Route component={Home} path="/" exact />
    <Route component={About} path="/about" />
    <Redirect to="/" />
  </Switch>
);
