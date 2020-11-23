import React from 'react'
import '../../Style.css'

import Navbar from '../../Navbar'
import Header from '../../Header'
import Content from '../../Content'
import AInventory from './AInventory'

class Inventory extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Header/>
                <div>
                    <AInventory />
                </div>
            </div>
        )
    }
}

export default Inventory