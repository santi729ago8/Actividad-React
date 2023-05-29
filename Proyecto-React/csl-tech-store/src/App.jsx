import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
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



const App = () => {
  const mostrarAlerta = () => {
    swal({
      title:'Bienvenido',
      text:'¿Quieres recibir las últimas novedades y las ofertas más ardientes?',
      icon:'warning',
      buttons: ['No', 'Sí']
    }).then(respuesta => {
      if (respuesta) {
      window.location='https://marketing4ecommerce.co/almacenes-alkosto-analisis/';
    }})
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

      <div className='app'>
        <button onClick={mostrarAlerta()}></button>
      </div>
    </div>



  )
}

export default App
