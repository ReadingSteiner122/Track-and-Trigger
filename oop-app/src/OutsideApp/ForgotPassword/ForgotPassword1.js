import React from 'react'
import './bg.css'

import LogoName from './LogoName'
import Form1 from './Form1'

class ForgotPassword1 extends React.Component{
    render(){
        return(
            <div>
                <div className="h">
                    <LogoName/>
                </div>
                <div className="reg1">
                    <Form1/>
                 </div>
            </div>
        )
    }
}

export default ForgotPassword1