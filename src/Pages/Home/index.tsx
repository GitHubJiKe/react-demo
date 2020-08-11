import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Content from "../../Components/Content";

export default () => {
  return (
    <Content>
      <Header title="Home" />
      <Content>
        <Link to="/about">About</Link>
      </Content>
    </Content>
  );
};
