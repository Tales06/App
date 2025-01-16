import React from "react";
import './Header.css';
import logo from '../img/logo.jpg';
import photoProfile from '../img/user-photo-profile/user123.webp';

const Header = () => {
    return (
        <div id="header">
            <div id="logo" style={{float:'left'}}>
                <span style={{color:'#5CB973', verticalAlign:'top'}}>MyMeeting</span>
                <img src={logo} alt="" />
            </div>
            <div id="user-log" style={{float:'right', margin: '10px 10px 0 0', fontSize:'14pt'}}>
                rossi.mario@gmail.com
                <img src={photoProfile} className="rounded-circle" alt="" width="60" height="60" />
            </div>
        </div>
    );
}

export default Header;