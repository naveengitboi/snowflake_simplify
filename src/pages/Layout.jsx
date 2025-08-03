import React from 'react'
import Actions from '../components/Actions'
import { Outlet } from 'react-router-dom'
import {Setup, Tables } from '../actions/main'
import Code from '../components/Code'

function Layout() {
  const s = new Setup({db:'Naveen', schema:'gold'})
  const t = new Tables(s);

  return (
    <>
      <div className="inner_container">

        <div className="actions_container border-dark-800 rounded-lg">
            <Actions/>
            {<Outlet/>}
        </div>

        <div className="results_container bg-dark-800 rounded-lg">
          {
            <Code children={s.config_setup()}/>
          }
        </div>
      </div>
    </>
  )
}

export default Layout