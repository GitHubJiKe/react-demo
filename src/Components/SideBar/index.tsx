import React, { useState } from "react";
import MenuItem, { IMenuItem } from "./Components/MenuItem";
import "./style.scss";

export interface ISideBarProps {
  menus: IMenuItem[];
  onItemClick?(item: IMenuItem): void;
}

export default ({ menus, onItemClick }: ISideBarProps) => {
  const [opened, setOpened] = useState(true);

  const handleItemClick = (item: IMenuItem) => {
    onItemClick && onItemClick(item);
  };

  const handleBtnClick = () => setOpened(!opened);

  const getSideBarClassName = () => {
    return opened ? "common-sidebar-opened" : "common-sidebar-closed";
  };

  return (
    <div className="common-sidebar">
      <div className={getSideBarClassName()}>
        <div className="menus">
          {menus.map((m) => (
            <MenuItem
              data={m}
              key={m.text}
              onClick={() => handleItemClick(m)}
            />
          ))}
        </div>
        <button className="sidebar-btn" onClick={handleBtnClick}>
          折叠
        </button>
      </div>
    </div>
  );
};
