import React from 'react'
import './../assets/css/Registrate.css'

const Registrate = () => {
    return (
    <div className="formulario">
    <div>
        <h2 className='H2Formulario'>Formulario de Registro</h2>
        <div>
            <form>
                <div>
                <legend>Datos de la Cuenta</legend>
                <label>Usuario:</label>
                <input type="text" className="form-control" id="user" placeholder="Usuario"/>
                <label >Correo Electronico:</label>
                <input type="email" className="form-control" id="email" placeholder="nombre@ejemplo.com"/>
                <label >Contraseña:</label>
                <input type="password" className="form-control" id="pass1" placeholder="Contraseña"/>
                <label >Rep. Contraseña:</label>
                <input type="password" className="form-control" id="pass2" placeholder="Repetir Contraseña"/>
                <label >Código Postal:</label>
                <input type="text" className="form-control" id="codigos" placeholder="Codigo Postal"/>
                </div>

            </form>
        </div>
    </div>
</div>

    )
}

export default Registrate
