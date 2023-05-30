import React from 'react'
import Celulares from './Celulares'
import './../assets/css/cssCartas/CartasCelulares.css'

const CartasCelulares = ({ agregarDatos }) => {
    return (
        <div className='GeneralCelulares'>
            <div className='CartaCelulares'>
                <Celulares agregarDatos={agregarDatos} />
            </div>
        </div>
    )
}

export default CartasCelulares
