
import { celulares, computadores, televisores } from './data/productos'

export const CardCarrito = ({ cell, mostrarBoton, agregarDatos, action }) => {

    const agregarCarrito = (id) => {
        let data = {}

        if (action === 'celular') {
            data = celulares.find(item => item.id === id)
        }
        if (action === 'pc') {
            data = computadores.find(item => item.id === id)
        }
        if (action === 'tv') {
            data = televisores.find(item => item.id === id)
        }

        agregarDatos(data)
    }

    return (
        <div className="Card" key={cell.id}>
            <h2 className="Marca" >{cell.name}</h2>
            <img className="imagen" src={cell.imagen} />
            <p className="Referencia" >{cell.referencia}</p>
            <h3 className="Precio" > $ {cell.precio}</h3>
            {
                mostrarBoton
                    ? <button onClick={() => agregarCarrito(cell.id)} className="Agregar" >Agregar al Carrito</button>
                    : ""
            }
        </div>
    )
}
