import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import { Form, Input,Button } from 'antd'
import DragAndDrop from "./DragAndDrop"
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

class ANewFile extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            id:null,
            name:null,
            file:null,
            user:null,
            image:null,
            files:[]
        }
    }
   onFinish = async (values) => {
    console.log(this.state.file)
    var FormData = require('form-data');
    var fd=new FormData();
    await fd.append("name",values.name)
    await fd.append("user",15)
    await fd.append('image', this.state.image, this.state.image.name);
    await console.log(fd)

    axios.post('http://localhost:8000/api/image_object/',fd,{
        headers:{
            'Content-Type':"multipart/form-data"
        }
    })
    .then(res=>{
    console.log(res);
    console.log(res.data);
  })
    console.log('Success:', fd);
    this.props.history.push("/dashboard/file")
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  handleImageChange = async (e) => {
    await this.setState({
      image: e.target.files[0]
    })
    await console.log(this.state.image)
  };
  handleDrop = (files) => {
    console.log(files)
    this.setState({image:files[0],files:files[0]})
  }



render(){
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
      onFinish={this.onFinish}
      onFinishFailed={this.onFinishFailed}
      
    >
      <Form.Item
        label="Name"
        name="name"
        
        rules={[
          {
            required: true,
            message: 'Please enter the name of the pic!',
          },
        ]}
      >
        <Input />
      </Form.Item>



<DragAndDrop handleDrop={this.handleDrop}>



        <div style={{height: 300, width: 250}}>

            <div >{this.state.files.name}</div>

        </div>
      </DragAndDrop>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

    </div>

    </div>
  );
      }
};

export default withRouter(ANewFile)
