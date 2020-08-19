import React from "react";
import { useLocation, Link } from "react-router-dom";
import classnams from "classnames";
import "./style.scss";

export interface IMenuItem {
  text: string;
  path: string;
  permissions?: string[];
}

interface IMenuItemProps {
  data: IMenuItem;
  onClick?(): void;
}

const MenuItem: React.FC<IMenuItemProps> = ({
  data: { text, path },
  onClick,
}) => {
  const location = useLocation();

  const handleClick = (e: any) => {
    e.stopPropagation();
    onClick && onClick();
  };

  return (
    <Link
      className={classnams("menu-item", {
        active: location.pathname === path,
        unactive: location.pathname !== path,
      })}
      to={path}
      onClick={handleClick}
    >
      {text}
    </Link>
  );
};

export default MenuItem;
