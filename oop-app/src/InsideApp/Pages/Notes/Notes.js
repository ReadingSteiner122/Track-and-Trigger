import React from 'react'

import Button from 'antd'
import Layout from '../../Containers/Layout'
import Article from './Article';
import 'antd/dist/antd.css';

class Notes extends React.Component{
    render(){
        return(
            <div>
                <Layout>
                <div className="content">
                    <Article/>
                </div>
                </Layout>

            </div>
        )
    }
}

export default Notes