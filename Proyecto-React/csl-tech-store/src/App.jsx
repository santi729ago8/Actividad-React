import './App.css'
import Menu from './components/Menu'
import React from 'react'
import ComponenteSesion1 from './components/ComponenteSesion1'
import ComponenteSesion2 from './components/ComponenteSesion2'
import ComponenteSesion3 from './components/ComponenteSesion3'
import alert from 'sweetalert'
import swal from 'sweetalert'


const App = () => {
  const mostrarAlerta = () => {
    swal({
      title:'Bienvenido',
      text:'¿Quieres recibir notificaciones?',
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
        <Menu />
      </div>

      <div>
        <ComponenteSesion1 />
      </div>

      <div>
        <ComponenteSesion2 />
      </div>

      <div>
        <ComponenteSesion3 />
      </div>

      <div className='app'>
        <button onClick={mostrarAlerta()}></button>
      </div>
    </div>


  )
}

export default App
