import React from "react";
import "./style.scss";

interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = ({ title = "title" }) => (
  <h1 className="common-header">{title}</h1>
);

export default Header;
