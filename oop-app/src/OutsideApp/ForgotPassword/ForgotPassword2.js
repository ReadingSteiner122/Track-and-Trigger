import React from 'react'
import './bg.css'

import LogoName from './LogoName'
import Form2 from './Form1'
import BForgotPassword from './BForgotPassword'

class ForgotPassword2 extends React.Component{
    render(){
        return(
            <div>
                <div className="h">
                    <LogoName/>
                </div>
                <BForgotPassword />
            </div>
        )
    }
}

export default ForgotPassword2