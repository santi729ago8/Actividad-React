
import { CardCarrito } from "./CardCarrito";

const MiCarro = ({ carrito }) => {

    let totalCompra = 0

    carrito.map(item => {
        totalCompra += Number(item.precio)
    })

    return (
        <>

            {
                carrito.map((item, index) => (
                    <CardCarrito key={index} cell={item} mostrarBoton={false} />
                ))
            }

            <h1>Total: $ {totalCompra}</h1>

        </>
    )
}
export default MiCarro