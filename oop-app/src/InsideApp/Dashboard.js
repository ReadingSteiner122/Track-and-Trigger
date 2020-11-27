import React from 'react'
import './Style.css'
import Layout from './Containers/Layout'
import Navbar from './Navbar'
import Header from './Header'
import Content from './Content'

class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <Layout>
                <Content/>
                </Layout>


            </div>
        )
    }
}

export default Dashboard