import React from "react";
import './../assets/css/Celulares.css'
import Celular1 from '../assets/img/celulares/ip-11.jpg'
import Celular2 from '../assets/img/celulares/ip-12.jpg'
import Celular3 from '../assets/img/celulares/ip-13-pro-max.jpg'
import Nuevo from '../assets/img/celulares/ip-13-nuevo.png'





const Celulares = () => {
    //Zona de Javascript
    const celular = [
        {
            id: 0,
            name: 'APPLE',
            referencia: 'Iphone 14 plus 128gb',
            precio: '5,069,000',
            imagen: Nuevo     
        },
        {
            id: 1,
            name: 'APPLE',
            referencia: 'Iphone 13 pro max 1tb',
            precio: '$7,029,000',
            imagen: Nuevo     
        },
        {
            id: 3,
            name: 'APPLE',
            referencia: 'Iphone 13 128gb',
            precio: '3,799,000', 
            imagen: Celular3    
        },
        {
            id: 4,
            name: 'APPLE',
            referencia: 'Iphone 12 64gb',
            precio: '3,649,000',
            imagen: Celular3     
        },
        {
            id: 5,
            name: 'APPLE',
            referencia: 'Iphone 11 64gb',
            precio: '2,179,000',
            imagen: Celular1    
        },
        {
            id: 6,
            name: 'SAMSUNG',
            referencia: 'Galaxy Z Fold4 5G',
            precio: '7,399,000',
            imagen: Celular2 
        },
        {
            id: 7,
            name: 'SAMSUNG',
            referencia: 'Galaxy S23 Ultra 5G 256GB',
            precio: '6,999,000',
            imagen: Celular3        
        },
        {
            id: 8,
            name: 'SAMSUNG',
            referencia: 'Galaxy A54 5G',
            precio: '2,399,000',
            imagen: Celular3        
        },
        {
            id: 9,
            name: 'SAMSUNG',
            referencia: 'Galaxy A34 5G',
            precio: '1,899,000',
            imagen: Celular1       
        }
    ]

    const itemsCelulares = celular.map((cell) => {
        
            return <div className="Card" key={cell.id}>
                <h2 className="Marca" >{cell.name }</h2>
                <img className="imagen" src={cell.imagen}/> 
                <p className="Referencia" >{cell.referencia }</p> 
                <h3 className="Precio" >{cell.precio}</h3>
                <button className="Agregar" >Agregar al Carrito</button> 
            </div>
        
    })

    //Zona de HTML
    return(
        <div>
            {itemsCelulares}
        </div>
    )
}

export default Celulares