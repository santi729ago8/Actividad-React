import React from "react";
import { NavLink } from 'react-router-dom';
import './../assets/css/Navbar.css'
import logo from './../assets/img/logo.svg'

const Navbar = () => {

    return(
        <div className="barraNavegacion">
            <nav className="navbar">
                <img className="logo-1" src={logo} />
                <ul >
                    <NavLink to="/"><li>Home</li></NavLink>
                    <NavLink to="/MiCarro"><li>Mi Carro</li></NavLink>
                    <NavLink to="/carrito"><li >No Usar</li></NavLink> 
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
        </div>

    )
}

export default Navbar
