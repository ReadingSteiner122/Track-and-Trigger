import React from 'react'
import '../../Style.css'

import Layout from '../../Containers/Layout'
import FileList from '../../Containers/ListView'
import AFile from './AFile'

class Files extends React.Component{
    render(){
        return(
            <div>
                <Layout>
                    <AFile />
                </Layout>
            </div>
        )
    }
}

export default Files