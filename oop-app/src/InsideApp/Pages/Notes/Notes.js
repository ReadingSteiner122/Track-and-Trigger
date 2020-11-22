import React from 'react'
import '../../Style.css'

import Navbar from '../../Navbar'
import Header from '../../Header'
import Content from '../../Content'

class Notes extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Header/>
                <Content/>
            </div>
        )
    }
}

export default Notes