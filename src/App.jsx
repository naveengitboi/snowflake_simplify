import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Table from './actions/main'

function App() {
  const t = new Table()

  return (
    <div className='wrapper bg-dark-900'>
      <Navbar></Navbar>


      <div className="inner_container">
        <div className="actions_container"></div>
        <div className="results_container">

        </div>
      </div>
    </div>
  )
}

export default App
