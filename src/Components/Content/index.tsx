import React from "react";
import "./style.scss";

const Content: React.FC = ({ children }) => (
  <div className="common-content-box">{children}</div>
);

export default Content;
