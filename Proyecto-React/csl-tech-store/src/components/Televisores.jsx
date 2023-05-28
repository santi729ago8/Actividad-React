import React from "react";
import './../assets/css/Televisores.css'

const Televisores= (props) => {
    //Zona de Javascript
    const televisor = [
        {
            id: 0,
            name: 'Sony ',
            referencia: 'Televisor 65 Pulgadas LED 4K HD Negro',
            precio: '2,649,900',
            imagen: ''          
        },
        {
            id: 1,
            name: 'Lg',
            referencia: 'Televisor Lg 43? 4k Smart Tv Uhd 43uq751c0sf',
            precio: '2,052,900',
            imagen: ''        
        },
        {
            id: 2,
            name: 'Sony',
            referencia: 'Televisor LG 70 Pulgadas 4K UHD 70UQ8050PSB Negro',
            precio: '3,299,900',
            imagen: ''        
        },
        {
            id: 3,
            name: 'Sony',
            referencia: 'Televisor Samsung 32" Hd Un32t4300',
            precio: '1030,900',
            imagen: ''       
        },
        {
            id: 4,
            name: 'Sony',
            referencia: 'Televisor INTEC 32pulg Hd Smart Wifi',
            precio: '634,900',
            imagen: ''        
        },
        {
            id: 5,
            name: 'Samsung',
            referencia: 'ATelevisor HYUNDAY 32 Pulgadas HD ANDROID HYLED3248AIM Gris',
            precio: '880.900',
            imagen: ''       
        },
        {
            id: 6,
            name: 'Samsung',
            referencia: 'Televisor CHALLENGER 40 Pulgadas LED 40TO65 BT Android',
            precio: '1,009,900',
            imagen: ''        
        },
        {
            id: 7,
            name: 'Samsung',
            referencia: 'Televisor HISENSE Led 43pulgadas 108cm Uhd 4k A6ga Smart Tv',
            precio: '1,444,900',
            imagen: ''        
        },
        {
            id: 8,
            name: 'Samsung',
            referencia: 'Televisor SAMSUNG 50 Pulgadas UHD 4K UN50BU8000KXZL Negro',
            precio: '1,836,900',
            imagen: ''        
        },
        {
            id: 8,
            name: 'Samsung',
            referencia: 'Televisor EXCLUSIV 50 Pulgadas LED UHD 4K Android Negro',
            precio: '1,529,900',
            imagen: ''        
        }
    ]

    const itemsTelevisores = televisor.map((tv) => {

            return <li key={tv.id}>
                { tv.name } { tv.referencia } {tv.precio} {tv.imagen}
            </li>
        
    })

    //Zona de HTML
    return(
        <ul>
            {itemsTelevisores}
        </ul>
    )
}

export default Televisores