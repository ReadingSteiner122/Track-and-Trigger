import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { Link,Route,Switch,Redirect, useHistory, withRouter } from 'react-router-dom';
import axios from 'axios';
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

class OTP_Form extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={data:[],
          user:null,
          phoneno:null
        }
    }   
   
  onFinish = async (values) => {
      await axios.get("http://127.0.0.1:8000/api/profile/")
      .then(res=>{
          console.log("gotten"+res)
          this.setState({data:res.data, phoneno:res.data[0].phone})
      })
      console.log("put into data"+this.state.data)
      if(this.state.data[0].otp!=values.otp)
      {
          alert("Wrong OTP")
          console.log("Failed otp entry")
        this.props.history.push("/otp")
      }
      if(this.state.data[0].otp==values.otp)
      {
          var userdata={
              email:this.state.data[0].email,
              password:this.state.data[0].password,
              username:this.state.data[0].username
          }
          await axios.post("http://127.0.0.1:8000/api/auth/register",userdata)
          .then(res=>{
              console.log("Posted")
              console.log(res.data)
              this.props.fetchUser(res.data.token)
              this.setState({user:res.data.user})
          })
          const phone_data={
            user:this.state.user.id,
            number:this.state.phoneno
          }
          console.log(phone_data)
          await axios.post("http://127.0.0.1:8000/api/phone/",phone_data)
            console.log('Success:', values);
            axios.delete("http://127.0.0.1:8000/api/profile/"+this.state.data[0].id,userdata)
            .then(res=>{
                console.log("Deleted")
            })
            this.props.history.push("/dashboard")
      }
  };

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
        label="Enter OTP"
        name="otp"
        rules={[
          {
            required: true,
            message: 'Please enter the OTP sent to mail!',
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


export default withRouter(connect(null, mapDispatchToProps)(OTP_Form));