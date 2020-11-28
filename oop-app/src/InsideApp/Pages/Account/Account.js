import React from 'react'
import '../../Style.css'

import Navbar from '../../Navbar'
import Header from '../../Header'
import Content from '../../Content'
import Layout from '../../Containers/Layout'
import AAccount from './AAccount'

class Account extends React.Component{
    render(){
        return(
            <Layout>
            <div className="content">
                <AAccount/>
            </div>
            </Layout >
        )
    }
}

export default Account