import React from "react";
import "./style.scss";

interface IErrorProps {
  error: Error | string;
}

const ErrorBox: React.FC<IErrorProps> = ({ error }) => {
  if (typeof error === "string") {
    return (
      <div className="error-box">
        <div>Error:</div>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="error-box">
      <div>Error:</div>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorBox;
