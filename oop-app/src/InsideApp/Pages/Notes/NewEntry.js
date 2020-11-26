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

const NewEntry = (props) => {
    const history=useHistory()
  const onFinish = (values) => {
    const data={
      title:values.title,
      date:values.date,
      entry:values.entry
    }
    axios.post('http://localhost:8000/api/diary/',{data})
  .then(res=>{
    console.log(res);
    console.log(res.data);
  })
    console.log('Success:', values);
    history.push("/dashboard/notes")
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
        label="Title"
        name="title"
        
        rules={[
          {
            required: true,
            message: 'Please enter the title!',
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
        label="Entry"
        name="entry"
        rules={[
          {
            required: true,
            message: 'Please tell us how your day was!',
          },
        ]}
      >
        <TextArea
          placeholder="How was your day?"
          autoSize={{ minRows: 2, maxRows: 6 }}
        />
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

export default NewEntry;