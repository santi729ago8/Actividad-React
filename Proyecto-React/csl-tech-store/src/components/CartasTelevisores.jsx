import React from 'react'
import Televisores from './Televisores'

const CartasTelevisores = ({ agregarDatos }) => {
    return (
        <div className='GeneralCelulares'>
            <div className='CartaCelulares'>
                <Televisores agregarDatos={agregarDatos} />
            </div>
        </div>
    )
}
export default CartasTelevisores