import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Headers from './components/Headers'
import Inputs from './pages/Inputs'
import { Routes, Route} from 'react-router-dom'
import Layout from './pages/Layout'
import Setup from './elements/Setup'
import Table from './elements/Table'
import STask from './elements/STask'

function App() {

  return (
    <div className='wrapper bg-dark-900'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/setup' element={<Setup/>}/>
          <Route path='/table' element={<Table/>}/>
          <Route path='/stream_task' element={<STask/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
