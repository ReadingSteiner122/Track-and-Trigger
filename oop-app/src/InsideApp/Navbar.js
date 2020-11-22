import React from 'react'
import './Style.css'
import { Link,Route,Switch } from 'react-router-dom';

function Navbar(){
    return(
        <ul className="navbar">
            <li ><img class="logo" src="Logo.png" alt="Logo" /></li>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <li ><Link to='/'><a class="navbutton" href=""><i class="fa fa-fw fa-power-off"></i>Logout</a></Link></li>
            <br/><br/>
            <li ><Link to='/dashboard/account'><a class="navbutton" href=""><i class="fa fa-fw fa-user"></i>Account</a></Link></li>
            <li ><Link to='/dashboard'><a class="navbutton active" href=""><i class="fa fa-fw fa-home"></i>Home</a></Link></li>
            <li ><Link to='/dashboard/inventory'><a class="navbutton" href=""><i class="fa fa-fw fa-database"></i>Inventory</a></Link></li>
            <li ><Link to='/dashboard/notes'><a class="navbutton" href=""><i class="fa fa-fw fa-edit"></i>Notes</a></Link></li>
            <li ><Link to='/dashboard/file'><a class="navbutton" href=""><i class="fa fa-fw fa-folder"></i>Files</a></Link></li>
            <li ><Link to='/dashboard/to-do'><a class="navbutton" href=""><i class="fa fa-fw fa-check-square-o"></i>To-do List</a></Link></li>
        </ul>
    )
}

export default Navbar