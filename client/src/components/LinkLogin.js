import React from "react";
import './Nav.css';

const LinkLogin = () => {
    return (
        <>
            <div id="login" style={{float:'right', height:'50px', color:'red', marginRight:'10px',  lineHeight:'50px', verticalAlign:'middle'}}>
                <ul>
                    <li>
                        <a id="login" href="/" onclick="" style={{textDecoration:'none'}}>Login</a>
                    </li>
                </ul>

            </div>
            <div id="login" style={{float:'right', height:'50px', color:'white', marginRight:'10px', marginTop:'-65px'}}>
                <ul>
                    <li>
                        <a id="login" href="/" onclick="" style={{textDecoration:'none'}}>Login</a>
                    </li>
                </ul>

            </div>
        </>
    );
}

export default LinkLogin;