import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import { Form, Input,Button } from 'antd'

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
            user:null
        }
    }
   onFinish = async (values) => {
    console.log(this.state.file)
    var fd=new FormData();
    await fd.append("name",values.name)
    await fd.append("user",15)
    await fd.append('image', {uri: this.state.file[0].path, name: this.state.file[0].name, filename :'imageName.png',type: this.state.file[0].type});
    await console.log(fd)
    const data={
      name:values.name,
      file:fd,
      user:15
    }
    axios.post('http://localhost:8000/api/image_object/',fd,{
        headers:{
            'Content-Type':"multipart/form-data"
        }
    })
    .then(res=>{
    console.log(res);
    console.log(res.data);
  })
    console.log('Success:', data);
    this.props.history.push("/dashboard/file")
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
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

      <Dropzone onDrop={acceptedFiles => {this.setState({file:acceptedFiles})}}>
                        {({getRootProps, getInputProps}) => (
                            <section>
                            <div {...getRootProps()} style={{marginLeft:150}}>
                                <input {...getInputProps()} />
                                <p style={{height:40,alignItems:'center'}}>Drag 'n' drop some files here, or click to select files</p>
                            </div>
                            </section>
                        )}
        </Dropzone>


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
