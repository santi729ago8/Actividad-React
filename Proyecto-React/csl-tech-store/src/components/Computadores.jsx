import React from 'react'
import './../assets/css/CartaProductos.css'
import { computadores } from './data/productos'
import { CardCarrito } from "./CardCarrito";

const Computadores = ({ agregarDatos }) => {

    const itemsComputadores = computadores.map((cell, index) => {
        return <CardCarrito
            key={index}
            cell={cell}
            mostrarBoton={true}
            agregarDatos={agregarDatos}
            action={'pc'}
        />

    })

    return (
        <ul>
            {itemsComputadores}
        </ul>
    )
}
export default Computadores
