import React, { Fragment } from "react";
import "./style.scss";

interface ILoadingProps {
  text?: string;
}

const Loading: React.FC<ILoadingProps> = ({ text = "loading..." }) => {
  return (
    <Fragment>
      <div className="loading-box">
        <div>{text}</div>
      </div>
      <div className="loading-mask"></div>
    </Fragment>
  );
};

export default Loading;
