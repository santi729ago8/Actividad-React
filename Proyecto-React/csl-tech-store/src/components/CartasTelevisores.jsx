import React from 'react'
import Televisores from './Televisores'

const CartasTelevisores = ({ agregarDatos }) => {
    return (
            <div>
                <Televisores agregarDatos={agregarDatos} />
            </div>
    )
}
export default CartasTelevisores