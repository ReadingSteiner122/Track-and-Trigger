import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { Link,Route,Switch,Redirect, useHistory } from 'react-router-dom';

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

const ARegister = (props) => {
    const history=useHistory()
  const onFinish = (values) => {
    console.log('Success:', values);
    history.push("/login")
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
      <div style={{flex:1, alignItems:"center", width:2000, alignContent:"center"}}>
      <div style={{width:500, alignSelf:"center", flex:1, marginLeft:450}}>
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
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

      <Form.Item
        label="Re-enter Password"
        name="Re-enter Password"
        rules={[
          {
            required: true,
            message: 'Please re-input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="PhoneNo"
        name="phoneno"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Profession"
        name="profession"
        rules={[
          {
            required: true,
            message: 'Please input your profession!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};

export default ARegister;