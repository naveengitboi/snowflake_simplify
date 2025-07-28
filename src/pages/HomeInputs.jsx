import React from 'react'
import { Outlet } from 'react-router-dom'


function HomeInputs() {
  return (
    <div className="">
        <h1>Hello</h1>
        <Outlet/>
    </div>
  )
}

export default HomeInputs