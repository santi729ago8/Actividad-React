import React from "react";
import './../assets/css/Celulares.css'
import tele from '../assets/img/televisores/televisor-1.png'


const Televisores = (props) => {
    //Zona de Javascript
    const televisor = [
        {
            id: 0,
            name: 'LG',
            referencia: 'Lg 65 Pulgadas LED 4K HD Negro',
            precio: '2,649,900',
            imagen: tele
        },
        {
            id: 1,
            name: 'LG',
            referencia: 'Lg 43 Pulgadas 4k Smart Tv Uhd 43uq751c0sf',
            precio: '2,052,900',
            imagen: tele
        },
        {
            id: 2,
            name: 'LG',
            referencia: 'LG 70 Pulgadas 4K UHD 70UQ8050PSB Negro',
            precio: '3,299,900',
            imagen: tele
        },
        {
            id: 3,
            name: 'SAMSUMG',
            referencia: 'Samsung 32 pulgadas Hd Un32t4300',
            precio: '1030,900',
            imagen: tele
        },
        {
            id: 4,
            name: 'INTEC',
            referencia: 'INTEC 32 pulgadas Hd Smart Wifi',
            precio: '634,900',
            imagen: tele
        },
        {
            id: 5,
            name: 'HYUNDAY',
            referencia: 'HYUNDAY 32 Pulgadas HD ANDROID HYLED3248AIM Gris',
            precio: '880.900',
            imagen: tele
        },
        {
            id: 6,
            name: 'CHALLENGER',
            referencia: 'CHALLENGER 40 Pulgadas LED 40TO65 BT Android',
            precio: '1,009,900',
            imagen: tele
        },
        {
            id: 7,
            name: 'HISENSE',
            referencia: 'HISENSE Led 43 pulgadas 108cm Uhd 4k A6ga Smart Tv',
            precio: '1,444,900',
            imagen: tele
        },
        {
            id: 8,
            name: 'SAMSUMG',
            referencia: 'SAMSUNG 50 Pulgadas UHD 4K UN50BU8000KXZL Negro',
            precio: '1,836,900',
            imagen: tele
        },
        {
            id: 9,
            name: 'EXCLUSIV',
            referencia: 'EXCLUSIV 50 Pulgadas LED UHD 4K Android Negro',
            precio: '1,529,900',
            imagen: tele
        }
    ]

    const itemsTelevisores = televisor.map((tv) => {

        return <div className="Card" key={tv.id}>
            <h2 className="Marca" >{tv.name}</h2>
            <img className="imagen" src={tv.imagen}/> 
            <p className="Referencia" >{tv.referencia}</p>
            <h3 className="Precio" >{tv.precio}</h3>
            <button className="Agregar" >Agregar al Carrito</button>
        </div>

    })

    //Zona de HTML
    return (
        <ul>
            {itemsTelevisores}
        </ul>
    )
}

export default Televisores