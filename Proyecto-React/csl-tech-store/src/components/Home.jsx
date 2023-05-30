import React from 'react'
import './../assets/css/Home.css'
import ComponenteSesion1 from './ComponenteSesion1'
import ComponenteSesion2 from './ComponenteSesion2'
import ComponenteSesion4 from './ComponenteSesion4'
import ComponenteSesion5 from './ComponenteSesion5'
import 'animate.css';

const Home = () => {
    const mostrarAlerta = () => {
        swal({
            title: 'Bienvenido',
            text: '¿Quieres recibir las últimas novedades y las ofertas más ardientes?',
            icon: 'warning',
            buttons: ['No', 'Sí']
        }).then(respuesta => {
            if (respuesta) {
                window.location = 'http://localhost:5173/Registrate';
            }
        })
    }


    return (
        <div>

            <div className='app'>
                <span onClick={mostrarAlerta()}></span>
            </div>

            <div>
                <ComponenteSesion1 />
            </div>

            <div className='App'>
                <div className='label'>
                    <label className='animate__animated animate__slideInLeft'> <b> Muy pronto Black Friday del 26 de mayo al 2 de junio aprovecha las mejores hiperofertas </b> </label>
                </div>
            </div>

            <div>
                <ComponenteSesion2 />
            </div>

            <div>
                <ComponenteSesion4 />
            </div>

            <div>
                <ComponenteSesion5 />
            </div>

        </div>
    )
}

export default Home
