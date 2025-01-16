import React from "react";
import './NavLinks.css';

import { Link } from "react-router-dom";

const NavLinks = () => {
    return (
        <>
        <div>
            <ul>
                {/* Con il componente di React "BrowserRouter"
                    ed il componente "Link"
                    cambia il modo di esprimere i link
                    https://reactrouter.com/en/main/components/link              
                */}
                <li><Link to='/'>Home</Link></li>
                <li><a href="/contacts">Contatti</a></li>
                <li><a href="/meetings">Appuntamenti</a></li>
                <li><a href="/groups">Gruppi</a></li>
                <li style={{display:'block', float:'right'}}><a href="/login">Login</a></li>
            </ul>
        </div>             
   </>
    );
}

export default NavLinks;
