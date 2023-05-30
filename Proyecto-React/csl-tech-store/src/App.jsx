import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'
import alert from 'sweetalert'
import swal from 'sweetalert'
import Home from './components/Home'
import Carrito from './components/Carrito'
import Navbar from "./components/Navbar"
import MiCarro from './components/MiCarro'
import Registrate from './components/Registrate'
import CartasCelulares from './components/CartasCelulares'
import CartasComputadores from './components/CartasComputadores'
import CartasTelevisores from './components/CartasTelevisores'
import ComponenteSesion3 from './../src/components/ComponenteSesion3'



const App = () => {

    const [carrito, setCarrito] = useState([])
    const carritoDeCompras = (datosCarrito) => {
    setCarrito([{
            id: 9,
            name: 'Samsung  ',
            referencia: 'Galaxy A54 5G',
            precio: '2.399.000',
            imagen: Nuevo 
    }])
    }

  return (
    <div >
    <div >
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/Registrate" element={ <Registrate/> }/>
          <Route path="/carrito" element={ <Carrito/> }/>
          <Route path="/MiCarro" element={ <MiCarro/> }/>
          <Route path="/CartasCelulares" element={ <CartasCelulares/> }/>
          <Route path="/CartasComputadores" element={ <CartasComputadores/> }/>
          <Route path="/CartasTelevisores" element={ <CartasTelevisores/> }/>
        </Routes>
      </Router>

    </div>
            <div>
                <ComponenteSesion3 />
            </div>

    </div>



  )
}

export default App
