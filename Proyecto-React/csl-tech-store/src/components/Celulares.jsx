import React from "react";
import './../assets/css/Celulares.css'
import Celular1 from '../assets/img/celulares/ip-11.jpg'
import Celular2 from '../assets/img/celulares/ip-12.jpg'
import Celular3 from '../assets/img/celulares/ip-13-pro-max.jpg'
import Nuevo from '../assets/img/celulares/ip-13-nuevo.png'
import { celulares } from './data/productos'

import { CardCarrito } from "./CardCarrito";


const Celulares = ({ agregarDatos }) => {
    

    const itemsCelulares = celulares.map((cell, index) => {
        
            return <CardCarrito 
                        key={ index }
                        cell={ cell } 
                        mostrarBoton={ true } 
                        agregarDatos={ agregarDatos }
                        action={ 'celular' }
                    />
        
    })

    //Zona de HTML
    return(
        <div>
            {itemsCelulares}
        </div>
    )
}

export default Celulares