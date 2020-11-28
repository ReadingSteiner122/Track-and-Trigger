import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { Link,Route,Switch,Redirect, useHistory, withRouter } from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux';
import {fetchUser} from '../../Redux/ActionCreator'

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

const mapDispatchToProps = dispatch => ({
  fetchUser: (user) => dispatch(fetchUser(user)),
});

class ARegister extends React.Component{
  constructor(props)
  {
    super(props);
  }
  onFinish = async (values) => {
    if(values.password!=values.rep)
    {
        alert("Password and Re-entered password not the same")
        this.props.history.push("/register")
    }
    if(values.password==values.rep)
    {
    console.log('Success:', values);
    const data={
      username:values.username,
      password:values.password,
      email:values.email,
      phone:values.phoneno
    }
    console.log(data)
    await axios.post("http://127.0.0.1:8000/api/profile/",data,)
    .then(res=>{
      console.log("Hello"+res.data)
      this.props.history.push("/otp")
    })
    }
  }

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  render()
  {


  return (
      <div style={{flex:1, alignItems:"center", width:2000, alignContent:"center"}}>
      <div style={{width:500, alignSelf:"center", flex:1, marginLeft:450}}>
    <Form
      {...layout}
      name="reg"
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
        label="Email ID"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your id!',
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
        name="rep"
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
        <Button type="primary" htmlType="submit" style={{marginBottom:200}}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};
}

export default withRouter(connect(null, mapDispatchToProps)(ARegister));