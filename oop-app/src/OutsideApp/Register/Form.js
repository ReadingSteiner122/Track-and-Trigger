import React from 'react'
import './bg.css'

function Form(){
    return(
        <div>
            <form className="ff14">
                    <label for="uname" class="uu"><b>Username:</b></label>
                    <input type="text" placeholder="Enter Email ID" name="uname" required /><br/><br/>
                    <label for="pass"  class="pp"><b>Password:</b></label>
                    <input type="password" placeholder="Enter Password" name="pass1" required/><br/><br/>
                    <label for="pp2"><b>Re-enter Password:</b></label>
                    <input type="password" placeholder="Re-Enter Password" name="pass2" required/><br/><br/>
                    <label for="ph" class="ph1"><b>Phone number:</b></label>
                    <input type="password" placeholder="Enter Phone Number" name="ph" required/><br/><br/>
                    <label for="pro" class="pro1"><b>Profession:</b></label>
                    <input type="password" placeholder="Enter Profession" name="pro" required/><br/><br/>
                    <input type="submit" value="Submit"/><br/><br/>
                    <input type="submit" value="Cancel"/><br/><br/>
                </form>
        </div>
    )
}

export default Form