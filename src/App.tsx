import React, { useEffect, useState } from "react";
import Pages from "./Pages";
import { useLocation, useHistory } from "react-router-dom";
import { IMenuItem } from "./Components/SideBar/Components/MenuItem";
import AppStore from "./AppStore";
import { useObserver } from "mobx-react";
import { Layout, Menu } from "antd";
import "./App.scss";
import "antd/dist/antd.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Header, Sider, Content, Footer } = Layout;

const menus: IMenuItem[] = [
  { text: "Home", path: "/" },
  { text: "Search", path: "/search" },
  { text: "About", path: "/about" },
  { text: "Smooth", path: "/smooth" },
  { text: "Shapes", path: "/shapes" },
  { text: "Draggable", path: "/draggable" },
  { text: "Demo", path: "/demo" },
  { text: "Table", path: "/table" },
  { text: "Echart", path: "/echart" },
];

export default function App() {
  const loacation = useLocation();
  const history = useHistory();

  const [collapsed, setCollapsed] = useState(false);
  const onMenuItemClick = (d: any) => {
    const { item, key, keyPath, domEvent } = d;
    console.log({ item, key, keyPath, domEvent });
    history.push(key);
  };

  useEffect(() => {
    const targetMenuItem = menus.find((m) => m.path === location.pathname);

    targetMenuItem && AppStore.setHeaderTitle(targetMenuItem.text);
  }, [loacation]);

  return (
    <Layout style={{ height: "100%" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">ESOP</div>
        <Menu theme="dark" mode="inline" onClick={onMenuItemClick}>
          {menus.map((m) => {
            return (
              <Menu.Item key={m.path} icon={<UserOutlined />}>
                {m.text}
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        {useObserver(() => (
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () =>
                  setCollapsed((c) => {
                    return !c;
                  }),
              }
            )}
          </Header>
        ))}
        <Content className="site-layout-content">
          <Pages />
        </Content>
        <Footer className="site-layout-footer">hello world</Footer>
      </Layout>
    </Layout>
  );
}
