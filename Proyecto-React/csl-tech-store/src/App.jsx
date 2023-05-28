import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import alert from 'sweetalert'
import swal from 'sweetalert'
import Home from './components/Home'
import Productos from './components/Productos'
import Carrito from './components/Carrito'
import Navbar from "./components/Navbar"



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
    <div>

    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/productos" element={ <Productos/> }/>
          <Route path="/carrito" element={ <Carrito/> }/>
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
