import React from 'react'
import './bg.css'




function Form1(){
    return(
        <div>
            <form>
            <label for="id" className="form1">Email ID:    </label>
                    <input type="text" placeholder="Enter Email ID" name="id" required /><br/><br/>
                    <label for="pass" class="form1">Password:    </label>
                    <input type="password" placeholder="Enter Password" name="pass" required /><br/><br/>
                    <input type="submit" value="Login"/><br/><br/>
                    <a href="#">Forgot Password</a><br/><br/>
                
            </form>
         </div>

    )
}

export default Form1