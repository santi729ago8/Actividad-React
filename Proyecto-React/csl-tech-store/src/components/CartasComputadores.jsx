import React from 'react'
import Computadores from './Computadores'


const CartasComputadores = ({ agregarDatos }) => {
    return (
        <div className='GeneralCelulares'>
            <div className='CartaCelulares'>
                <Computadores agregarDatos={agregarDatos} />
            </div>
        </div>
    )
}

export default CartasComputadores