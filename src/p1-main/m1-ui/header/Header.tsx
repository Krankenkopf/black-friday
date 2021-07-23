import css from './Header.module.css';
import logo from './../assets/png/oregallyLogoSmall.png'
import {NavLink} from "react-router-dom";
import React from "react";


const Header = () => {
    return (
        <header className={css.header}>
                <NavLink to="/main">Main</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Sign up</NavLink>
                <NavLink to="/password_recovery">Password recovery</NavLink>
                <NavLink to="/enter_new_password">New password</NavLink>
                <NavLink to="/test">Test</NavLink>
        </header>
    )
}

export default Header;