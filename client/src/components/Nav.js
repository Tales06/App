import React from "react";
import NavLinks from './NavLinks.js';
import LoginForm from './LoginForm.js';
import Meeting from './Meeting.js';
import AddNewMeetForm from './AddNewMeetForm.js';
import LinkLogin from './LinkLogin.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Nav = () => {
    return (
        <>
        <div id="nav" >
            <BrowserRouter>
                <NavLinks />
                    <Routes>
                        <Route path='/' element={<h1>Home page</h1>} />
                        <Route path='/contacts' element={<h2>Contatti</h2>} />
                        <Route path='/login' element={<LoginForm />} />
                        <Route path='meetings' element={<Meeting />} />
                        <Route path='meetings/add' element={<AddNewMeetForm />} />
                    </Routes>
                {/* <LinkLogin /> */}
            </BrowserRouter>
        </div>
        </>
    );
}

export default Nav;