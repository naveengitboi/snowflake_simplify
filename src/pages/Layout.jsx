import React from 'react'
import Actions from '../components/Actions'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <div className="inner_container">

        <div className="actions_container border-dark-800 rounded-lg">
            <Actions/>
            {<Outlet/>}
        </div>



        {/* Results Container */}


        <div className="results_container bg-dark-800 rounded-lg">
          {/* {t.show_tables()} */}
        </div>
      </div>
    </>
  )
}

export default Layout