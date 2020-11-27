import React from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import { Link,Route,Switch,Redirect, useHistory, withRouter } from 'react-router-dom';
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

class DeleteFile extends React.Component {
    constructor(props){
        super(props);
        this.state={
            key:null,
            deletedata:null,
            data:[],
        }
    }
    componentDidMount(){
     axios.get('http://127.0.0.1:8000/api/image_object/')
    .then(res=>{
        this.setState({
            data:res.data
        })
    })
    }
    
    onFinish = async (values) => {
    console.log('Success:', values);
    
    const data={
      name:values.name,
    }

    
        for(var i=0;i<this.state.data.length;i++){
            if(data.name==this.state.data[i].name)
            {   this.setState({key:this.state.data[i].id,
                deletedata:{
                    name:this.state.data[i].name,
                    image:this.state.data[i].image,
                    user:this.state.data[i].user,
                }
            });
            }
        }
    
    console.log(this.state.key);
    axios.delete('http://127.0.0.1:8000/api/image_object/'+this.state.key,this.state.deletedata)
    .then(res=>{
        console.log("Deleted"+res.data);
    })
    this.props.history.push('/dashboard/file');
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
        label="Title of Image"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please enter Title!',
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
    }
};

export default withRouter(DeleteFile);