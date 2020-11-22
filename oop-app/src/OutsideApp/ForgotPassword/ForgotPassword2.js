import React from 'react'
import './bg.css'

import LogoName from './LogoName'
import Form2 from './Form1'

class ForgotPassword2 extends React.Component{
    render(){
        return(
            <div>
                <div className="h">
                    <LogoName/>
                </div>
                <div className="reg2">
                    <Form2/>
                 </div>
            </div>
        )
    }
}

export default ForgotPassword2