import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/components/Actions.css'
function Actions() {
  return (
    <div className="actions_header flex  ">
        <NavLink to='/setup'>Setup</NavLink>
        <NavLink to='/table'>Table</NavLink>
        <NavLink to='/stream_task'>Stream & Task</NavLink>
        <NavLink to='/advanced'>Advanced</NavLink>
    </div>
  )
}

export default Actions;