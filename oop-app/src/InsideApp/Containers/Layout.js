import React from 'react';
import 'antd/dist/antd.css';

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const customLayout=(props)=>{
    return(
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Account</Menu.Item>
            <Menu.Item key="2">Home</Menu.Item>
            <Menu.Item key="3">Inventory</Menu.Item>
            <Menu.Item key="4">Diary</Menu.Item>
            <Menu.Item key="5">Files</Menu.Item>
            <Menu.Item key="6">To-Do List</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
              {props.children}
          </div>
        </Content>

      </Layout>
    );
}
 
  export default customLayout;