import React from "react";
import "./style.scss";

interface IHeaderProps {
  title: string;
}

export default ({ title = "title" }: IHeaderProps) => {
  return <h1 className="common-header">{title}</h1>;
};
