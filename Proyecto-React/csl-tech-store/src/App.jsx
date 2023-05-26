import './App.css'
import Menu from './components/Menu'
import React from 'react'
import ComponenteSesion1 from './components/ComponenteSesion1'
import ComponenteSesion2 from './components/ComponenteSesion2'
import ComponenteSesion3 from './components/ComponenteSesion3'


const App = () => {

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
    </div>

  )
}

export default App
