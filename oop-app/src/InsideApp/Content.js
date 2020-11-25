import React from 'react'
import './Style.css'
import { connect } from "react-redux";

function Content(props){
    return(
        <div className="content">
            <h2>Hey {props.auth.username}</h2>
            <h3>Last Logged in: Timestamp</h3>
            <h3>Reminders set:No_of_reminders_set</h3>
            <div>
                <h3>Links Repo</h3>
             </div>
        </div>
    )
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Content);