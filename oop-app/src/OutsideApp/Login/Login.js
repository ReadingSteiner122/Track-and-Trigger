import React from 'react'
import './bg.css'
import {Redirect} from 'react-router-dom'

import LogoName from './LogoName'
import Form1 from './Form1'
import Form2 from './Form2'

class Login extends React.Component{
    render(){
        return(
            <div>
                <div className="h">
                    <LogoName/>
                    </div>
                    <div className="log">
                    <Form1/>
                    <h2>OR</h2>
                    <Form2/>
                    
                 </div>
            </div>
        )
    }
}

export default Login