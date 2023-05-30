import React from 'react'
import './../assets/css/ComponenteSesion2.css'
import ofertaCelular from '../assets/img/celulares/ip-11.jpg'
import ofertaComputador from '../assets/img/computadores/COMPUTADOR-1.png'
import ofertaTelevisor from '../assets/img/televisores/televisor-1.png'


const ComponenteSesion2 = () => {
    return (
        <div>
            <div className='contenedor-2'>
                <div className='animate__animated animate__heartBeat'>
                <h2 className='tituloC2' > Ofertas Destacadas</h2>
                </div>
                
            </div>
            <div className='contenedor-sesion2'>
                <div>
                <a href="./cartasCelulares"><img className='imagenPromocion' src={ofertaCelular} /></a>
                </div>
                <div>
                <a href="./cartasComputadores"><img className='imagenPromocion' src={ofertaComputador}  /></a>
                </div>
                <div>
                <a href="./cartasTelevisores"><img className='imagenPromocion' src={ofertaTelevisor}  /></a>
                </div>
            </div>
        </div>
    )
}

export default ComponenteSesion2