import React, { useEffect, useState } from 'react'
import './App.css'
import ListaProductos from './Components/ListaProductos'
import Carrito from './Components/Carrito'


const App = () => {
  const [itemsCarrito, setItemsCarrito] = useState ([])
  const [productos, setProductos] = useState ([])

  useEffect(() =>{
    fetch('')
    .then((respuesta) => {respuesta.json()})
    .then((datos) => setProductos(datos))
  }, [])

  const agregarAlCarrito = (productoId) => {
    const agregarProducto = productos.find((producto) =>{ producto.id === productoId
      setItemsCarrito((items) => { [...items, agregarProducto]  })
    })
  }

  const removerDelCarrito = (productoId) => {
    setItemsCarrito((items) =>{
      items.filter((item) => { item.id !== producto})
    })


return(
  <div className='app'>
    <ListaProductos/>
    <Carrito/>
  </div>
)
}
}

export default App



