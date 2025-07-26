import React from 'react'
import '../styles/components/Navbar.css'

function Navbar() {
  return (
    <div className="navbar flex items-center justify-between rounded-lg bg-dark-800">
        <h1 className='main_font font-bold'>Simplify</h1>
        <ul className='list-none items-center flex rounded-lg'>
            <li>Sql</li>
            <li>Python</li>
        </ul>
    </div>
  )
}

export default Navbar