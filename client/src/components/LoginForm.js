import React from "react";
import './LoginForm.css';

const LoginForm = () => {
    return (
        <>
        <div id="form_login" style={{float:'right'}}>		
            <form>		  	
                <span>Email&nbsp;<input type="email" size="20" value="" style={{fontSize:'14pt'}} /></span><span id="end-mail"></span>
                <span>Password&nbsp;<input type="password" size="20" style={{fontSize:'14pt'}} value="" /></span><span id="end-password"></span>&nbsp;		  			  		
                <span><button onclick="" class="btn">OK</button><button onclick="" class="btn">Annulla</button></span>	
            </form>		  		
        </div>
        </>
    );
}

export default LoginForm;