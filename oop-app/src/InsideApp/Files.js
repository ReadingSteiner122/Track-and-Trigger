import React from 'react';
import 'antd/dist/antd.css';

import Layout from './Containers/Layout'
import Lists from './Containers/ListView'

class Files extends React.Component{
    render(){
        return(
            <div>
                <Layout>
                    <Lists/>
                </Layout>
            </div>
        )
    }
}

export default Files