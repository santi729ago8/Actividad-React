import React from "react";
import MyContext from './MiContexto';
import ComponenteConsumer from "./ComponenteConsumer";

const ComponenteProvider = () => {
const texto = 'Hola soy el mensaje enviado desde el Consumer'
    return(
        <MiContexto.Provider valor={texto}>
            <ComponenteConsumer/>
        </MiContexto.Provider>
    )
}

export default ComponenteProvider