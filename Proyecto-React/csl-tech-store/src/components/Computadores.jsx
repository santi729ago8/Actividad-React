import React from 'react'
import './../assets/css/Celulares.css'
import pc1 from '../assets/img/computadores/COMPUTADOR-1.png'
import { computadores } from './data/productos'
import { CardCarrito } from "./CardCarrito";

const Computadores = ({agregarDatos}) => {
    //Zona de Javascript
    

    const itemsComputadores = computadores.map((cell, index) => {
        return <CardCarrito 
                    key={index}
                    cell={cell}
                    mostrarBoton={true}
                    agregarDatos={agregarDatos}
                    action={'pc'}
                />
        
    })

    //Zona de HTML
    return(
        <ul>
            {itemsComputadores}
        </ul>
    )
}
export default Computadores
