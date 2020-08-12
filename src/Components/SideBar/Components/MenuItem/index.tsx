import React from "react";
import { useLocation } from "react-router-dom";
import "./style.scss";

export interface IMenuItem {
  text: string;
  path?: string;
}

interface IMenuItemProps {
  data: IMenuItem;
  onClick?(): void;
}

const MenuItem = ({ data: { text, path }, onClick }: IMenuItemProps) => {
  const location = useLocation();

  const getMenuItemClassName = () => {
    return location.pathname === path ? "menu-item-active" : "menu-item";
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    onClick && onClick();
  };

  if (path) {
    return (
      <a className={getMenuItemClassName()} href={path} onClick={handleClick}>
        {text}
      </a>
    );
  }

  return (
    <div className={getMenuItemClassName()} onClick={handleClick}>
      {text}
    </div>
  );
};

export default MenuItem;
