import React from 'react'

import 'antd/dist/antd.css';
import Layout from '../../Containers/Layout'
import FileList from '../../Containers/ListView'
import AFile from './AFile'

class Files extends React.Component{
    render(){
        return(
            <Layout>
            <div style={{backgroundImage : "-webkit-linear-gradient(to right, #5D26C1, #a17fe0, #59C173)"}}>
                    <AFile />
            </div>
            </Layout>
        )
    }
}

export default Files