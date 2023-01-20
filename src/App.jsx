import React from 'react'
import './App.css'
import { Navbar} from './components'
import {Router} from './Routes'



const App = () => {
  return (
    <div>
        <Navbar/>
        <Router/>
    </div>
  )
}

export default App
