import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Productos from './Components/Productos'
import Carrito from './Components/Carrito'
import Navbar from './Components/Navbar'

const App = () => {
  
  return(
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
  )
}

export default App
