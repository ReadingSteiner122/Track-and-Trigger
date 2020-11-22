import React from 'react'
import './bg.css'

function Form2(){
    return(
        <div>
            <form className="ff2">
                    <label for="pass" class="form2"><b>New Password:</b></label>
                    <input type="password" placeholder="Enter Password" name="pass1" required/><br/><br/>
                    <label for="pass" class="form3"><b>Re-enter Password:</b></label>
                    <input type="password" placeholder="Re-Enter Password" name="pass2" required/><br/><br/>
                    <input type="submit" value="Submit"/><br/><br/>
                </form>
        </div>

    )
}

export default Form2