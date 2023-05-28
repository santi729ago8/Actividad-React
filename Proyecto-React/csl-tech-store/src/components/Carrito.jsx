import React from "react";
import Celulares from './Celulares'
import Televisores from './Televisores'
import Computadores from './Computadores'

const Carrito = () => {

    return(
        <div>
            <div>
                <Celulares />
            </div>
            <div>
                <Televisores />
            </div>
            <div>
                <Computadores />
            </div>
        </div>
    )
}

export default Carrito