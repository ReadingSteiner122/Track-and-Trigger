import React from 'react'
import './Style.css'

function Navbar(){
    return(
        <ul className="navbar">
            <li ><img class="logo" src="Logo.png" alt="Logo" /></li>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <li ><a class="navbutton" href="#"><i class="fa fa-fw fa-power-off"></i>Logout</a></li>
            <br/><br/>
            <li ><a class="navbutton" href="#"><i class="fa fa-fw fa-user"></i>Account</a></li>
            <li ><a class="navbutton active" href="#"><i class="fa fa-fw fa-home"></i>Home</a></li>
            <li ><a class="navbutton" href="#"><i class="fa fa-fw fa-database"></i>Inventory</a></li>
            <li ><a class="navbutton" href="#"><i class="fa fa-fw fa-edit"></i>Notes</a></li>
            <li ><a class="navbutton" href="#"><i class="fa fa-fw fa-folder"></i>Files</a></li>
            <li ><a class="navbutton" href="#"><i class="fa fa-fw fa-check-square-o"></i>To-do List</a></li>
            <li ><a class="navbutton" href="#"><i class="fa fa-fw fa-gear"></i>Additional</a></li>
        </ul>
    )
}

export default Navbar