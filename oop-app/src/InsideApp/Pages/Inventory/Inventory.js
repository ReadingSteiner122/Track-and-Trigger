import React from 'react'
import '../../Style.css'
import 'antd/dist/antd.css';
import Layout from '../../Containers/Layout'

import AInventory from './AInventory'

class Inventory extends React.Component{
    render(){
        return(
            <div>
                <Layout>
                <div>
                    <AInventory />
                </div>
                </Layout>

            </div>
        )
    }
}

export default Inventory