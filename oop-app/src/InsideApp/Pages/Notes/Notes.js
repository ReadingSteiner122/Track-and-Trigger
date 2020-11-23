import React from 'react'
import '../../Style.css'
import Button from 'antd'
import Navbar from '../../Navbar'
import Header from '../../Header'
import Article from './Article';

class Notes extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Header/>
                <div className="content">
                    <Article/>
                </div>
            </div>
        )
    }
}

export default Notes