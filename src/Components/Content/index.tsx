import React from "react";
import "./style.scss";

const Content: React.FC = ({ children }) => {
  return <div className="common-content-box">{children}</div>;
};

export default Content;
