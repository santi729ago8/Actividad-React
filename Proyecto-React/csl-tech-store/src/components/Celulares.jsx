import React from "react";
import './../assets/css/Celulares.css'




const Celulares = () => {
    //Zona de Javascript
    const celular = [
        {
            id: 0,
            name: 'Apple',
            referencia: 'Iphone 14 plus 128gb',
            precio: '5,069,000',
            imagen: ''     
        },
        {
            id: 1,
            name: 'Apple',
            referencia: 'Iphone 13 pro max 1tb',
            precio: '$7,029,000',
            imagen: ''     
        },
        {
            id: 3,
            name: 'Apple',
            referencia: 'Iphone 13 128gb',
            precio: '3,799,000', 
            imagen: ''     
        },
        {
            id: 4,
            name: 'Apple',
            referencia: 'Iphone 12 64gb',
            precio: '3,649,000',
            imagen: ''     
        },
        {
            id: 5,
            name: 'Apple',
            referencia: 'Iphone 11 64gb',
            precio: '2,179,000',
            imagen: ''     
        },
        {
            id: 6,
            name: 'Samsung',
            referencia: 'Galaxy Z Fold4 5G',
            precio: '7,399,000',
            imagen: ''     
        },
        {
            id: 7,
            name: 'Samsung',
            referencia: 'Galaxy S23 Ultra 5G 256GB',
            precio: '6,999,000',
            imagen: ''        
        },
        {
            id: 8,
            name: 'Samsung',
            referencia: 'Galaxy A54 5G',
            precio: '2,399,000',
            imagen: ''        
        },
        {
            id: 9,
            name: 'Samsung',
            referencia: 'Galaxy A34 5G',
            precio: '1,899,000',
            imagen: ''        
        }
    ]

    const itemsCelulares = celular.map((cell) => {
        
            return <li key={cell.id}>
                { cell.name } { cell.referencia } {cell.precio} {cell.imagen} 
            </li>
        
    })

    //Zona de HTML
    return(
        <ul>
            {itemsCelulares}
        </ul>
    )
}

export default Celulares