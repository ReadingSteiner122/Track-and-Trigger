import React from 'react'
import './bg.css'
import {Redirect} from 'react-router-dom'

import LogoName from './LogoName'
import Form1 from './Form1'
import Form2 from './Form2'
import Alogin from './Alogin'

class Login extends React.Component{
    render(){
        return(
            <div>
                <div className="h">
                    <LogoName/>
                    </div>
                    <div>
                        <Alogin />
                    </div>
            </div>
        )
    }
}

export default Login