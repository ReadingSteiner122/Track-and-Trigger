import React from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import { Link,Route,Switch,Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';

const { TextArea } = Input;
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

const TNewEntry = (props) => {
    const history=useHistory()
  const onFinish = (values) => {
    console.log('Success:', values);
    history.push("/dashboard/to-do")
    const data={
      name:values.name,
      date:values.date,
      description:values.description,
      user:values.user,
    }
    axios.post('http://localhost:8000/api/todoitem/',data)
    .then(res=>{
      console.log(res.data);
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
      <div style={{flex:1, alignItems:"center", width:2000, alignContent:"center"}}>
      <div style={{width:500, alignSelf:"center", flex:1, marginLeft:450}}>
          <br></br>
          <br></br>
          <br></br>
    <Form
      {...layout}
      name="newentry"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please enter Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Date"
        name="date"
        rules={[
          {
            required: true,
            message: 'Please enter the date!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Desc"
        name="desc"
        rules={[
          {
            required: true,
            message: 'Please tell us how your day was!',
          },
        ]}
      >
        <TextArea
          placeholder="What do you want to do?"
          autoSize={{ minRows: 2, maxRows: 6 }}
        />
      </Form.Item>

      <Form.Item
        label="User"
        name="user"
        rules={[
          {
            required: true,
            message: 'Please enter the user!',
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

export default TNewEntry;