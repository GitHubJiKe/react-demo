import React, { useState } from "react";
import MenuItem, { IMenuItem } from "./Components/MenuItem";
import classnams from "classnames";
import "./style.scss";
import { hasPermissions } from "../../utils";

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
    <div
      className={classnams("common-sidebar", {
        opened: opened,
        closed: !opened,
      })}
    >
      <div className="menus">
        {menus.map((m) => {
          const item = (
            <MenuItem
              data={m}
              key={m.text}
              onClick={() => handleItemClick(m)}
            />
          );

          if (!m.permissions) return item;

          if (hasPermissions(m.permissions)) return item;

          return null;
        })}
      </div>
      <button className="sidebar-btn" onClick={handleBtnClick}>
        折叠
      </button>
    </div>
  );
};

export default SideBar;
