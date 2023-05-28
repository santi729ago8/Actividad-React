import React from "react";
import Registrate from './../assets/css/Registrate.css'

const Productos = () => {

    return(
        <div className="formulario">
            <div>
                <h2 >Formulario de Registro</h2>
                <div>
                    <form>
                        <div>
                        <legend>Datos de la Cuenta</legend>
                        <label for="user">Usuario:</label>
                        <input type="text" class="form-control" id="user" placeholder="Usuario"/>
                        <label for="email">Correo Electronico:</label>
                        <input type="email" class="form-control" id="email" placeholder="nombre@ejemplo.com"/>
                        <label for="Pass1">Contraseña:</label>
                        <input type="password" class="form-control" id="pass1" placeholder="Contraseña"/>
                        <label for="pass2">Rep. Contraseña:</label>
                        <input type="password" class="form-control" id="pass2" placeholder="Repetir Contraseña"/>
                        <label for="codipos">Código Postal:</label>
                        <input type="text" class="form-control" id="codigos" placeholder="Codigo Postal"/>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
}

export default Productos
