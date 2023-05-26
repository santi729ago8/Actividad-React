import React from 'react'

const Menu = () => {


    return (
        <div className='App'>
            <div className='Titulo'>
                <h1>CSL Tech Store</h1>
            </div>
            <div className="barra de navegacion">
                <nav className="menu">
                    <a className="option" href="">Contenido</a>
                    <a className="option" href="">Mis Pedidos</a>
                    <a className="option" href="Blog">Mi Carrito</a>
                    <button href="formulario">Registrate</button>
                </nav>
            </div>
            <div>
                <label>Muy pronto Black Friday <button>Suscribete aqui y recibe el 5% off</button></label>
            </div>
        </div>
    )
}

export default Menu