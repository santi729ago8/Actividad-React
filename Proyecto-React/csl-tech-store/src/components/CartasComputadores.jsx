import React from 'react'
import Computadores from './Computadores'


const CartasComputadores = ({ agregarDatos }) => {
    return (
            <div>
                <Computadores agregarDatos={agregarDatos} />
            </div>
    )
}

export default CartasComputadores