import React from 'react';
import 'antd/dist/antd.css';

import Layout from '../../Containers/Layout'
import FileList from '../../Containers/ListView'

class Inventory extends React.Component{
    render(){
        return(
            <div>
                <Layout>
                    <FileList/>
                </Layout>
            </div>
        )
    }
}

export default Inventory