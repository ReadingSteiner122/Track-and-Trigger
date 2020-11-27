import React from 'react';
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css';

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const customLayout=(props)=>{
    return(
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Link to='/dashboard/account'><Menu.Item key="1">Account</Menu.Item></Link>
            <Link to='/dashboard'><Menu.Item key="2">Home</Menu.Item></Link>
            <Link to='/dashboard/inventory'><Menu.Item key="3">Inventory</Menu.Item></Link>
            <Link to='/dashboard/notes'><Menu.Item key="4">Diary</Menu.Item></Link>
            <Link to='/dashboard/file'><Menu.Item key="5">Files</Menu.Item></Link>
            <Link to='/dashboard/to-do'><Menu.Item key="6">To-Do List</Menu.Item></Link>
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