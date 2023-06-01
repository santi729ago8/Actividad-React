import React from "react";
import './../assets/css/CartaProductos.css'
import { televisores } from '../components/data/productos'
import { CardCarrito } from "./CardCarrito";


const Televisores = ({ agregarDatos }) => {

    const itemsTelevisores = televisores.map((cell, index) => {

        return <CardCarrito
            key={index}
            cell={cell}
            mostrarBoton={true}
            agregarDatos={agregarDatos}
            action={'tv'}
        />

    })

    return (
        <div className='product-list'>
            {itemsTelevisores}
        </div>
    )
}

export default Televisores