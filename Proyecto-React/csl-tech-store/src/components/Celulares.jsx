import React from "react";
import './../assets/css/Celulares.css'

const Celulares = (props) => {
    //Zona de Javascript
    const celular = [
        {
            id: 0,
            name: 'Apple',
            referencia: 'Agua',
            precio: '$100.000'          
        },
        {
            id: 1,
            name: 'Apple',
            referencia: 'Agua',
            precio: '$100.000'        
        },
        {
            id: 3,
            name: 'Apple',
            referencia: 'Agua',
            precio: '$100.000'        
        },
        {
            id: 4,
            name: 'Apple',
            referencia: 'Agua',
            precio: '$100.000'       
        },
        {
            id: 5,
            name: 'Apple',
            referencia: 'Agua',
            precio: '$100.000'        
        },
        {
            id: 6,
            name: 'Samsung',
            referencia: 'Agua',
            precio: '$100.000'       
        },
        {
            id: 7,
            name: 'Samsung',
            referencia: 'Agua',
            precio: '$100.000'        
        },
        {
            id: 8,
            name: 'Samsung',
            referencia: 'Agua',
            precio: '$100.000'        
        },
        {
            id: 9,
            name: 'Samsung',
            referencia: 'Agua',
            precio: '$100.000'        
        },
        {
            id: 10,
            name: 'Samsung',
            referencia: 'Agua',
            precio: '$100.000'        
        }
    ]

    const itemsCelulares = celular.map((cell) => {
        if(props.mostrar){
            return <li key={cell.id}>
                Marca: { cell.name }, Referencia: { cell.referencia }, Precio: {cell.precio}
            </li>
        }
    })

    //Zona de HTML
    return(
        <ul>
            {itemsCelulares}
        </ul>
    )
}

export default Celulares