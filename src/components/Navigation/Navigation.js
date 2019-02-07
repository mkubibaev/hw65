import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => (
    <ul className="nav">
        <li className="nav-item active">
            <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/about" className="nav-link">About</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
        </li>
    </ul>
);

export default Navigation;