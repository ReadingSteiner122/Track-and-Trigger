import React from 'react'
import 'antd/dist/antd.css';
import Layout from '../../Containers/Layout'

import AToDo from './AToDo'

class ToDo extends React.Component{
    render(){
        return(
            <div>
                <Layout>
                <div className="content">
                <AToDo />
                </div>
                </Layout>

            </div>
        )
    }   
}

export default ToDo