import React from "react";
import Celulares from './Celulares'
import Televisores from './Televisores'
import Computadores from './Computadores'


const Carrito = () => {

    return(
        <div className="contenedor-productos" >
            <div className="contendor-celulares">
                <Celulares />
            </div>
            <div className="contendor-televisores">
                <Televisores />
            </div>
            <div className="contendor-computadores">
                <Computadores />
            </div>
        </div>
    )
}

export default Carrito