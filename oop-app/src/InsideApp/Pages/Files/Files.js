import React from 'react'

import 'antd/dist/antd.css';
import Layout from '../../Containers/Layout'
import FileList from '../../Containers/ListView'
import AFile from './AFile'

class Files extends React.Component{
    render(){
        return(
            <Layout>
            <div className="content">
                    <AFile />
            </div>
            </Layout>
        )
    }
}

export default Files