import React, { useState } from "react";
import './../assets/css/Registrate.css'


const Registrate = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correoElectronico, setCorreoElectronico] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [repetirContraseña, setRepetirContraseña] = useState("")
    const [fechaDeNacimiento, setFechaDeNacimiento] = useState("");
    const [direccion, setDireccion] = useState("");
    const [codigoPostal, setCodigoPostal] = useState("");
    const [terminos, setTerminos] = useState(false) 
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Nombre: ${nombre}\nApellido: ${apellido}\nCorreo electrónico: ${correoElectronico}\nContraseña: ${contraseña}\nRepetir Contraseña: ${repetirContraseña}\nFecha de Nacimiento: ${fechaDeNacimiento}\nDireccion: ${direccion}\nCodigo Postal: ${codigoPostal}`);
    };

    const handleReset = () => {
        setNombre('');
        setApellido('');
        setCorreoElectronico('');
        setContraseña('');
        setRepetirContraseña('');
        setFechaDeNacimiento('');
        setDireccion('');
        setCodigoPostal('');
        setTerminos(false);
    };

    const validarDatos = ()=> {
        if(contraseña.value != repetirContraseña.value){
            swal('Hey!! las contraseñas tienen que ser iguales')
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            
            <h3 className="formReg">Formulario de Registro</h3>

            <label className="labelsFormularios" >Nombres:</label>
            <input required type="text" className="imputsFormulario" placeholder="Ingrese sus Nombres" value={nombre} onChange={(event) => setNombre(event.target.value)} />

            <label className="labelsFormularios" >Apellidos:</label>
            <input required type="text" className="imputsFormulario" placeholder="Ingrese sus Apellidos" value={apellido} onChange={(event) => setApellido(event.target.value)} />

            <label className="labelsFormularios" >Correo Electrónico:</label>
            <input required type="email" className="imputsFormulario" placeholder="Ingrese su E-mail" value={correoElectronico} onChange={(event) => setCorreoElectronico(event.target.value)} />

            <label className="labelsFormularios" >Contraseña:</label>
            <input required type="password" className="imputsFormulario" placeholder="Contraseña" value={contraseña} onChange={(event) => setContraseña(event.target.value)} />

            <label className="labelsFormularios" >Rep. Contraseña:</label>
            <input required type="password" className="imputsFormulario" placeholder="Repetir Contraseña" value={repetirContraseña} onChange={(event) => setRepetirContraseña(event.target.value)} />

            <label className="labelsFormularios">Fecha de nacimiento:</label>
            <input required type="date" className="imputsFormulario" placeholder="Fecha de nacimiento" value={fechaDeNacimiento} onChange={(event) => setFechaDeNacimiento(event.target.value)} />

            <label className="labelsFormularios">Dirección:</label>
            <input required type="text" className="imputsFormulario" placeholder="Dirección de residencia" value={direccion} onChange={(event) => setDireccion(event.target.value)} />

            <label className="labelsFormularios" >Código Postal:</label>
            <input required type="text" className="imputsFormulario" placeholder="Codigo Postal" value={codigoPostal} onChange={(event) => setCodigoPostal(event.target.value)} />
            
            <label>Legalidades:</label>
            <input required type="checkbox" checked={terminos} className="terminos" value={terminos} onChange={(event) => setTerminos(!terminos)}/>Acepto los Terminos y condiciones

            <div className="botones">
            <input type="submit" className="boton" value="Registrar"/>
            <button type="button" className="boton" onClick={handleReset}>Reiniciar</button>
            </div>

        </form>
    );
}

export default Registrate