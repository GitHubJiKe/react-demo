import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Content from "../../Components/Content";
import UrlListCard, { IQuote } from "./Components/UrlListCard";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../../Components/Loading";
import ErrorBox from "../../Components/Error";

const fetchData = () =>
  axios.get("https://programming-quotes-api.herokuapp.com/quotes");

const Home: React.FC = () => {
  const { error, data, isLoading } = useQuery("data", fetchData);

  if (error) {
    return <ErrorBox error={error as Error} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Content>
      <Link to="/about">About</Link>
      <UrlListCard data={data?.data as IQuote[]} />
    </Content>
  );
};

export default Home;
