import React from "react";
import './../assets/css/CartaProductos.css'
import { celulares } from './data/productos'
import { CardCarrito } from "./CardCarrito";


const Celulares = ({ agregarDatos }) => {


    const itemsCelulares = celulares.map((cell, index) => {

        return <CardCarrito
            key={index}
            cell={cell}
            mostrarBoton={true}
            agregarDatos={agregarDatos}
            action={'celular'}
        />

    })

    //Zona de HTML
    return (
        <div>
            {itemsCelulares}
        </div>
    )
}

export default Celulares