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
            user:null
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
    }

    render(){
        return(
        <Descriptions title="User Info">
        {this.state.user!=null?<Descriptions.Item label="UserName">{this.state.user.username}</Descriptions.Item>:null}
      </Descriptions>
        )}
}


export default connect(mapStateToProps)(AAccount)