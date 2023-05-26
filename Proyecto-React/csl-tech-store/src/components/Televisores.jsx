import React from "react";
import './../assets/css/Televisores.css'

const Televisores= (props) => {
    //Zona de Javascript
    const televisor = [
        {
            id: 0,
            name: 'Sony',
            referencia: 'Agua',
            precio: '$100.000'          
        },
        {
            id: 1,
            name: 'Sony',
            referencia: 'Agua',
            precio: '$100.000'        
        },
        {
            id: 3,
            name: 'Sony',
            referencia: 'Agua',
            precio: '$100.000'        
        },
        {
            id: 4,
            name: 'Sony',
            referencia: 'Agua',
            precio: '$100.000'       
        },
        {
            id: 5,
            name: 'Sony',
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

    const itemsTelevisores = televisor.map((tv) => {
        if(props.mostrar){
            return <li key={tv.id}>
                Marca: { tv.name }, Referencia: { tv.referencia }, Precio: {tv.precio}
            </li>
        }
    })

    //Zona de HTML
    return(
        <ul>
            {itemsTelevisores}
        </ul>
    )
}

export default Televisores