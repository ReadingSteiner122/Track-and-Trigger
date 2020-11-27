import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  FileOutlined,
  CheckOutlined,
  LogoutOutlined,
  ContainerOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

class customLayout extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      id:1
    }
  }
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" ><Link to="/dashboard">
              Home
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}><Link to="/dashboard/account">
              Account
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<ContainerOutlined />}><Link to="/dashboard/inventory">
              Inventory
              </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<CheckOutlined />}><Link to="/dashboard/to-do">
              To-Do List
              </Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<FileOutlined />}><Link to="/dashboard/notes">
              Diary
              </Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<UploadOutlined />}><Link to="/dashboard/file">
              Image Upload
              </Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<LogoutOutlined />}><Link to="/">
              Logout
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, backgroundColor:"white" }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default customLayout