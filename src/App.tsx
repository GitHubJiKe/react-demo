import React from "react";
import "./App.scss";
import Pages from "./Pages";
import SideBar from "./Components/SideBar";
import { BrowserRouter } from "react-router-dom";
import { IMenuItem } from "./Components/SideBar/Components/MenuItem";

const menus: IMenuItem[] = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
];

export default function App() {
  const onMenuItemClick = (item: IMenuItem) => {
    console.log(item);
  };

  return (
    <BrowserRouter>
      <div className="layout">
        <SideBar menus={menus} onItemClick={onMenuItemClick} />
        <div className="right-box">
          <Pages />
        </div>
      </div>
    </BrowserRouter>
  );
}
