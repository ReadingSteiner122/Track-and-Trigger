import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Descriptions } from 'antd';
import axios from 'axios'
import {connect} from 'react-redux'

function mapStateToProps( auth ) {
    return  auth ;
  }

class AAccount extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            dataSource:null,
            user:null,
            phone:null
        }
    }

    async componentDidMount()
    {
        await axios.get('http://127.0.0.1:8000/api/auth/user',{
    headers:{
        'Authorization': 'Token '+this.props.token
    }
      })
      .then(res=>{
        console.log(res.data)
        this.setState({user:res.data})
      })
      await axios.get('http://127.0.0.1:8000/api/phone')
      .then(res=>{
        console.log(res.data)
        for(var i=0;i<res.data.length;i++)
        {
          if(this.state.user.id===res.data[i].user)
            this.setState({phone:res.data[i].number})
        }
        console.log(this.state.phone)
      })
    }

    render(){
        return(
        <Descriptions title="User Info">
        {this.state.user!=null?<Descriptions.Item label="UserName">{this.state.user.username}</Descriptions.Item>:null}
        {this.state.user!=null?<Descriptions.Item label="Email ID">{this.state.user.email}</Descriptions.Item>:null}
        {this.state.phone!=null?<Descriptions.Item label="Phone Number">{this.state.phone}</Descriptions.Item>:null}  
      </Descriptions>
        )}
}


export default connect(mapStateToProps)(AAccount)