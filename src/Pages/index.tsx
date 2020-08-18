import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Smooth from "./Smooth";
import Shapes from "./Shapes";
import DraggablePage from "./DraggablePage";
import Demo from "./Demo";

const Pages: React.FC = () => (
  <Switch>
    <Route component={Home} path="/" exact />
    <Route component={About} path="/about" />
    <Route component={Smooth} path="/smooth" />
    <Route component={Shapes} path="/shapes" />
    <Route component={DraggablePage} path="/draggable" />
    <Route component={Demo} path="/demo" />
    <Redirect to="/" />
  </Switch>
);

export default Pages;
