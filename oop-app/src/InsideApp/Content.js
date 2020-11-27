import React from 'react'
import './Style.css'
import { connect } from "react-redux";

function Content(props){
    console.log(props)
    return(
        <div className="content" style={{marginTop:100}}>
            <h2>Hey {props.auth.username}! Use the menu to navigate and do what you gotta do!</h2>
            
        </div>
    )
}

function mapStateToProps({ auth }) {
    console.log(auth)
    return { auth };
}

export default connect(mapStateToProps)(Content);