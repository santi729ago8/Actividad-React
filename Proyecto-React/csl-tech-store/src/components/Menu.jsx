import React from 'react'
import './../assets/css/Menu.css'

const Menu = () => {

    
    return (
        <div className='App'>
            <nav className="justify-content-end">
                <nav className="left">
                    <select className="contenedor">
                        <option >celulares</option>
                        <option >computadores</option>
                        <option >televisores</option>
                    </select>
                    
                </nav>
                <nav className='menu right'>
                    <a className="option" href="Blog">Mi Carrito de compras</a>
                    <button className='registrate' href="formulario">Registrate</button>
                </nav>
            </nav>
            <div className='Titulo'>
                <h1>CSL STORE</h1>
            </div>
            <div className='label'>
                <label>Muy pronto Black Friday del 26 de mayo al 2 de junio aprovecha las mejores hiperofertas</label>
            </div>
        </div>
    )
}

export default Menu