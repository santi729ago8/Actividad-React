import React from 'react'
import './../assets/css/Menu.css'

const Menu = () => {





    
    return (
        <div className='App'>
            <div className='Titulo'>
                <h1>CSL Store</h1>
            </div>
            <nav className="justify-content-end">
                <nav className="left">
                    <a className="option" href="">Contenido</a>
                </nav>
                <nav className='menu right'>
                    <a className="option" href="Blog">Mi Carrito</a>
                    <button className='registrate' href="formulario">Registrate</button>
                </nav>
            </nav>
            <div className='label'>
                <label>Muy pronto Black Friday del 26 de mayo al 2 de junio <button>Suscribete aquí y recibe el 5% off</button> aprovecha las mejores hiperofertas</label>
            </div>
        </div>
    )
}

export default Menu