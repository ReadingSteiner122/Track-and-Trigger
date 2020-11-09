import React from 'react'
import './bg.css'

function Form1(){
    return(
        <div>
            <form className="ff">
                    <label for="id"><b>Email ID:</b></label>
                    <input type="text" placeholder="Enter Email ID" name="id" required/><br/><br/>
                    <input type="submit" value="Submit"/><br/><br/>
            </form>
        </div>

    )
}

export default Form1