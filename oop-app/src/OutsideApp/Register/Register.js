import React from 'react'
import {Redirect} from 'react-router-dom'
import './bg.css'

import LogoName from './LogoName'
import Form from './Form'

class Register extends React.Component{
    render(){
        return(
            <div>
                <div className="h">
                    <LogoName/>
                </div>
                <div className="reg">
                    <Form/>
                 </div>
            </div>
        )
    }
}

export default Register