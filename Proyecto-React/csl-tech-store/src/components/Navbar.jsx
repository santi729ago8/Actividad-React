import React from "react";
import { NavLink } from 'react-router-dom';
import './../assets/css/Navbar.css'
import logo from './../assets/img/logo.svg'

const Navbar = () => {

    return(
        <nav className="navbar">
            <input type="checkbox" id="check" />
            <label for="check" class="checkbtn"><i className="fas fa-bars"></i></label>
            <img className="logo-1" src={logo} />
            <ul>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/carrito"><li>Carrito</li></NavLink> 
                <NavLink to="/Productos"><li>Registrate</li></NavLink>
            </ul>
        </nav>
    )
}

export default Navbar
