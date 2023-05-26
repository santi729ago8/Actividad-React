import React from 'react'
import './../assets/css/Computadores.css'

const Computadores = (props) => {
    //Zona de Javascript
    const computador = [
        {
            id: 0,
            name: 'Apple',
            referencia: 'MacBook', 
            precio: '$1.000.000'           
        },
        {
            id: 1,
            name: 'Apple',
            referencia: 'MacBook', 
            precio: '$1.000.000'
        },
        {
            id: 2,
            name: 'Apple',
            referencia: 'MacBook', 
            precio: '$1.000.000'
        },
        {
            id: 3,
            name: 'Apple',
            referencia: 'MacBook', 
            precio: '$1.000.000'
        },
        {
            id: 4,
            name: 'Apple',
            referencia: 'MacBook', 
            precio: '$1.000.000'
        },
        {
            id: 5,
            name: 'Samsung',
            referencia: 'Galaxy', 
            precio: '$1.000.000'
        },
        {
            id: 6,
            name: 'Samsung',
            referencia: 'Galaxy', 
            precio: '$1.000.000'
        },
        {
            id: 7,
            name: 'Samsung',
            referencia: 'Galaxy', 
            precio: '$1.000.000'
        },
        {
            id: 8,
            name: 'Samsung',
            referencia: 'Galaxy', 
            precio: '$1.000.000'
        },
        {
            id: 9,
            name: 'Samsung',
            referencia: 'Galaxy', 
            precio: '$1.000.000'
        },
        {
            id: 10,
            name: 'Samsung',
            referencia: 'Galaxy', 
            precio: '$1.000.000'
        }

    ]

    const itemsComputadores = computador.map((pc) => {
        if(props.mostrar){
            return <li key={pc.id}>
                Marca: { pc.name }, Referencia: { pc.referencia }, Precio { pc.precio }
            </li>
        }
    })

    //Zona de HTML
    return(
        <ul>
            {itemsComputadores}
        </ul>
    )
}
export default Computadores
