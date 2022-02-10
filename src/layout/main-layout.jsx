import React, { useCallback } from "react";
import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import { HomeOutlined, UserOutlined, ProfileOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

// import logoImg from "@/assets/imgs/logo.jpg";

import "./index.less";

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

const menuList = [
  {
    title: "Home",
    key: "home",
    icon: <HomeOutlined />,
    path: "/home",
  },
  {
    title: "用户",
    key: "user",
    icon: <UserOutlined />,
    path: "/user",
    children: [
      {
        title: "用户列表",
        key: "userList",
        icon: <ProfileOutlined />,
        path: "/user/list",
      },
    ],
  },
];

function MainLayout() {
  const navigate = useNavigate();

  const onClick = (item) => {
    navigate(item.path);
  };

  const getMenuList = useCallback((list) => {
    return list?.map((item) => {
      if (item?.children?.length > 0) {
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {getMenuList(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={item.key} icon={item.icon} onClick={() => onClick(item)}>
          {item.title}
        </Menu.Item>
      );
    });
  }, []);

  return (
    <div className="main-layout">
      <div className="header1" />
      <Layout>
        <Header className="header">
          {/* <img src={logoImg} /> */}
          demo
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu mode="inline" defaultSelectedKeys={["home"]} style={{ height: "100%", borderRight: 0 }}>
              {getMenuList(menuList)}
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: "24px 0 0 0",
                minHeight: 280,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default MainLayout;
