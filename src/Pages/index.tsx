import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Smooth from "./Smooth";

const Pages: React.FC = () => (
    <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={Smooth} path="/smooth" />
        <Redirect to="/" />
    </Switch>
);

export default Pages;
