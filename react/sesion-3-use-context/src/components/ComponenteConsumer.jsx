import React, { useContext } from "react";
import MiContexto from "./MiContexto"
import ComponenteProvider from "./ComponenteProvider";

const ComponenteConsumer = () => {
    const valor = useContext(MiContexto)
    return(
        <MiContexto.Consumer>
            {(valor) => <div>{valor}</div> }
            //  <ComponenteProvider />
        </MiContexto.Consumer>
    )
}

export default ComponenteConsumer