import React from 'react'
import './../assets/css/Celulares.css'
import pc1 from '../assets/img/computadores/COMPUTADOR-1.png'

const Computadores = (props) => {
    //Zona de Javascript
    const computador = [
        {
            id: 0,
            name: 'APPLE',
            referencia: 'Yoga 9i 8va Gen (14”, Intel)', 
            precio: '8,699,000',
            imagen: pc1           
        },
        {
            id: 1,
            name: 'APPLE',
            referencia: 'ThinkPad P15 (15.6”, Intel)', 
            precio: '5,999,000',
            imagen: pc1           
        },
        {
            id: 2,
            name: 'APPLE',
            referencia: 'ASUS Vivobook Pro 15” OLED', 
            precio: '5,899,000',
            imagen: pc1           
        },
        {
            id: 3,
            name: 'APPLE',
            referencia: 'Zenbook Pro 16”X OLED (UX7602)', 
            precio: '15,799,000',
            imagen: pc1           
        },
        {
            id: 4,
            name: 'APPLE',
            referencia: 'ROG Zephyrus M16” (2022) GU603ZE-K8040W', 
            precio: '8,599,000',
            imagen: pc1           
        },
        {
            id: 5,
            name: 'ACER',
            referencia: 'acer Intel corei3', 
            precio: '1,899,000',
            imagen: pc1           
        },
        {
            id: 6,
            name: 'Samsung',
            referencia: 'HP PAVILION', 
            precio: '2,099,000',
            imagen: pc1           
        },
        {
            id: 7,
            name: 'LENOVO',
            referencia: 'LENOVO IDEAPAD 3', 
            precio: '1,499,000',
            imagen: pc1           
        },
        {
            id: 8,
            name: 'ASUS',
            referencia: 'ASUS VIVOBOOK', 
            precio: '2,799.000',
            imagen: pc1           
        },
        {
            id: 9,
            name: 'APPLE',
            referencia: 'MACBOOK AIR', 
            precio: '4,749,000',
            imagen: pc1           
        }
    ]

    const itemsComputadores = computador.map((pc) => {
        return <div className="Card" key={pc.id}>
                <h2 className="Marca" >{pc.name }</h2>
                <img className="imagen" src={pc.imagen}/> 
                <p className="Referencia" >{pc.referencia }</p> 
                <h3 className="Precio" >{pc.precio}</h3>
                <button className="Agregar" >Agregar al Carrito</button>  
                </div>
        
    })

    //Zona de HTML
    return(
        <ul>
            {itemsComputadores}
        </ul>
    )
}
export default Computadores
