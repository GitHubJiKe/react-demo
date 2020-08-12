import React from "react";
import { Link } from "react-router-dom";
import Content from "../../Components/Content";

const Home: React.FC = () => (
  <Content>
    <Link to="/about">About</Link>
  </Content>
);

export default Home;
