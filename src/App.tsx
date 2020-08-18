import React, { useEffect } from "react";
import Pages from "./Pages";
import SideBar from "./Components/SideBar";
import { useLocation } from "react-router-dom";
import { IMenuItem } from "./Components/SideBar/Components/MenuItem";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AppStore from "./AppStore";
import { useObserver } from "mobx-react";
import "./App.scss";
import "antd/dist/antd.css";

const menus: IMenuItem[] = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Smooth", path: "/smooth" },
  { text: "Shapes", path: "/shapes" },
  { text: "Draggable", path: "/draggable" },
  { text: "Demo", path: "/demo" },
];

export default function App() {
  const loacation = useLocation();

  const onMenuItemClick = (item: IMenuItem) => {
    console.log(item);
  };

  useEffect(() => {
    const targetMenuItem = menus.find((m) => m.path === location.pathname);

    targetMenuItem && AppStore.setHeaderTitle(targetMenuItem.text);
  }, [loacation]);

  return (
    <div className="layout">
      <SideBar menus={menus} onItemClick={onMenuItemClick} />
      <div className="right-box">
        {useObserver(() => (
          <Header title={AppStore.headerTitle} />
        ))}
        <div className="pages-box">
          <Pages />
        </div>
        <Footer text="hello world" />
      </div>
    </div>
  );
}
