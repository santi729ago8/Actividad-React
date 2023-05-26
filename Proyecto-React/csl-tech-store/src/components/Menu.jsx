import React from 'react'
import './../assets/css/Menu.css'

const Menu = () => {





    
    return (
        <div className='App'>
            <div className='Titulo'>
                <h1>CSL Store</h1>
            </div>
            <div className="barra de navegacion">
                <nav className="menu">
                    <a className="option" href="">Contenido</a>
                    <a className="option" href="">Mis Pedidos</a>
                    <a className="option" href="Blog">Mi Carrito</a>
                    <button className='registrate' href="formulario">Registrate</button>
                </nav>
            </div>
            <div>
                <label>Muy pronto Black Friday del 26 de mayo al 2 de junio <button>Suscribete aquí y recibe el 5% off</button> aprovecha las mejores hiperofertas</label>
            </div>
        </div>
    )
}

export default Menu