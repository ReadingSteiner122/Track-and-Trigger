import React from 'react'
import '../../Style.css'

import Navbar from '../../Navbar'
import Header from '../../Header'
import Content from '../../Content'
import AToDo from './AToDo'

class ToDo extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Header/>
                <div>
                    <AToDo />
                </div>
            </div>
        )
    }   
}

export default ToDo