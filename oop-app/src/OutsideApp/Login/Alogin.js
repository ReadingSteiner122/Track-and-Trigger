import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { Link,Route,Switch,Redirect, useHistory,withRouter } from 'react-router-dom';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class Alogin extends React.Component {
  constructor(props){
    super(props);
  }
  
  onFinish = (values) => {
    console.log('Success:', values);
    this.props.history.push("/dashboard")
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  render(){

  return (
      <div style={{flex:1, alignItems:"center", width:2000, alignContent:"center"}}>
      <div style={{width:500, alignSelf:"center", flex:1, marginLeft:450}}>
    <Form
      {...layout}
      name="login"
      initialValues={{
        remember: true,
      }}
      onFinish={this.onFinish}
      onFinishFailed={this.onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
    <div style={{marginLeft:450}} onClick={() => this.props.history.push("/forgot1")}>
    <Button type="primary">
          Forgot Password
        </Button>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div style={{marginRight:600,  width:600, justifyContent:"space-evenly", marginLeft:40}}>
    <Button type="primary" style={{marginRight:50}}>
          Sign Up with Google
        </Button>
        <Button type="primary" onClick={()=>this.props.history.push("/register")} style={{marginRight:50}}>
          Register
        </Button>
    <Button type="primary">
          Sign Up with Facebook
        </Button>
    </div>
    </div>
    </div>
   );
  }
};

export default withRouter(Alogin);