import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Link,Route,Switch } from 'react-router-dom';
import './bg.css'




function Form1(){
    return(
        <div>
            <form>
            <label for="id" className="form1">Email ID:    </label>
                    <input type="text" placeholder="Enter Email ID" name="id" required /><br/><br/>
                    <label for="pass" class="form1">Password:    </label>
                    <input type="password" placeholder="Enter Password" name="pass" required /><br/><br/>
                    <Link to="/dashboard"><input type="submit" value="Login"/><br/><br/></Link>
                    <Link to="/forgot1"><a>Forgot Password</a><br/><br/></Link>
                
            </form>
         </div>

    )
}

export default Form1