import React from 'react'
import './../assets/css/Computadores.css'

const Computadores = (props) => {
    //Zona de Javascript
    const computador = [
        {
            id: 0,
            name: 'Apple',
            referencia: 'Yoga 9i 8va Gen (14”, Intel)', 
            precio: '8,699,000',
            imagen: ''           
        },
        {
            id: 1,
            name: 'Apple',
            referencia: 'ThinkPad P15 (15.6”, Intel)', 
            precio: '5,999,000',
            imagen: ''
        },
        {
            id: 2,
            name: 'Apple',
            referencia: 'ASUS Vivobook Pro 15” OLED', 
            precio: '5,899,000',
            imagen: ''
        },
        {
            id: 3,
            name: 'Apple',
            referencia: 'Zenbook Pro 16”X OLED (UX7602)', 
            precio: '15,799,000',
        },
        {
            id: 4,
            name: 'Apple',
            referencia: 'ROG Zephyrus M16” (2022) GU603ZE-K8040W', 
            precio: '8,599,000',
            imagen: ''
        },
        {
            id: 5,
            name: 'Samsung',
            referencia: 'acer Intel corei3', 
            precio: '1,899,000',
            imagen: ''
        },
        {
            id: 6,
            name: 'Samsung',
            referencia: 'HP PAVILION', 
            precio: '2,099,000',
            imagen: ''
        },
        {
            id: 7,
            name: 'Samsung',
            referencia: 'LENOVO IDEAPAD 3', 
            precio: '1,499,000',
            imagen: ''
        },
        {
            id: 8,
            name: 'Samsung',
            referencia: 'ASUS VIVOBOOK', 
            precio: '2,799.000',
            imagen: ''
        },
        {
            id: 9,
            name: 'Samsung',
            referencia: 'MACBOOK AIR', 
            precio: '4,749,000',
            imagen: ''
        }
    ]

    const itemsComputadores = computador.map((pc) => {

            return <li key={pc.id}>
            { pc.name } { pc.referencia } { pc.precio } {pc.imagen}
            </li>
        
    })

    //Zona de HTML
    return(
        <ul>
            {itemsComputadores}
        </ul>
    )
}
export default Computadores
