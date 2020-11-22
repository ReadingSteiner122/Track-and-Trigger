import React from 'react'
import './bg.css'

import LogoName from './LogoName'
import Form1 from './Form1'
import AForgotPassword from './AForgotPassword'

class ForgotPassword1 extends React.Component{
    render(){
        return(
            <div>
                <div className="h">
                    <LogoName/>
                </div>
                <AForgotPassword />
            </div>
        )
    }
}

export default ForgotPassword1