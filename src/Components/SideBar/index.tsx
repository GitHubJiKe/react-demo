import React, { useState } from "react";
import MenuItem, { IMenuItem } from "./Components/MenuItem";
import classnams from "classnames";
import "./style.scss";

export interface ISideBarProps {
  menus: IMenuItem[];
  onItemClick?(item: IMenuItem): void;
}

const SideBar: React.FC<ISideBarProps> = ({ menus, onItemClick }) => {
  const [opened, setOpened] = useState(true);

  const handleItemClick = (item: IMenuItem) => {
    onItemClick && onItemClick(item);
  };

  const handleBtnClick = () => setOpened(!opened);

  return (
    <div className="common-sidebar">
      <div
        className={classnams({
          opened: opened,
          closed: !opened,
        })}
      >
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

export default SideBar;
