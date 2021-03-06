import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Smooth from "./Smooth";
import Shapes from "./Shapes";
import DraggablePage from "./DraggablePage";
import Demo from "./Demo";
import AdvancedTable from "./AdvancedTable";
import EChartDemo from "./EChartDemo";
import DraggableSearchBox from "./DraggableSearchBox";

const Pages: React.FC = () => (
  <Switch>
    <Route component={Home} path="/" exact />
    <Route component={About} path="/about" />
    <Route component={Smooth} path="/smooth" />
    <Route component={Shapes} path="/shapes" />
    <Route component={DraggablePage} path="/draggable" />
    <Route component={Demo} path="/demo" />
    <Route component={AdvancedTable} path="/table" />
    <Route component={EChartDemo} path="/echart" />
    <Route component={DraggableSearchBox} path="/search" />
    <Redirect to="/" />
  </Switch>
);

export default Pages;
