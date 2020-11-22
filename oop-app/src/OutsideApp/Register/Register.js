import React from 'react'
import {Redirect} from 'react-router-dom'


import LogoName from './LogoName'
import Form from './Form'

import ARegister from './ARegister'

class Register extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <ARegister />
                 </div>
            </div>
        )
    }
}

export default Register