import React from "react";
import { NavLink } from 'react-router-dom';
import './../assets/css/Navbar.css'
import logo from './../assets/img/logo.svg'

const Navbar = () => {

    return(
        <nav className="navbar">
            <input type="checkbox" id="check" />
            <label className="checkbtn"><i className="fas fa-bars"></i></label>
            <img className="logo-1" src={logo} />
            <ul >
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/MiCarro"><li>Mi Carro</li></NavLink>
                <NavLink to="/carrito"><li >Carrito</li></NavLink> 
                <NavLink to="/Registrate"><li>Registrate</li></NavLink> 
            </ul>
            <ul className="categorias">
            <NavLink to="/MiCarro"><li>Contenido</li></NavLink>
            </ul>
            <ul className="listados-productos">
                <NavLink to="/CartasCelulares"><li>Celulares</li></NavLink>
                <NavLink to="/CartasComputadores"><li >Computadores</li></NavLink> 
                <NavLink to="/CartasTelevisores"><li>Televisores</li></NavLink>
            </ul>
        </nav>
    )
}

export default Navbar
