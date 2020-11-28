import React from 'react'
import {Redirect} from 'react-router-dom'


import LogoName from './LogoName'
import Form from './Form'

import ARegister from './ARegister'

class Register extends React.Component{
    render(){
        return(
            <div style={{background: "linear-gradient(to right, #1d4350, #a43931)"}}>
                <br />
                <br />
                <br />
                <div>
                    <ARegister />
                 </div>
            </div>
        )
    }
}

export default Register