import React, { CSSProperties } from "react";
import classnames from "classnames";
import "./style.scss";

interface CardProps {
  title: string;
  style?: CSSProperties;
  className?: string;
  bordered: boolean;
  extra?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  className,
  extra,
  bordered,
  style,
}) => {
  return (
    <div
      className={classnames("card-root", {
        bordered: bordered,
        [className || ""]: !!className,
      })}
      style={style}
    >
      <div className="card-header">
        <span>{title}</span>
        {extra && <div>{extra}</div>}
      </div>
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;
