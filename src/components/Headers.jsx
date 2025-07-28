import React from 'react'

function Headers(props){
  return (
    <div className="top_header">
            <p className='text-light-300 mb-3 border-b-1 border-dark-700 pb-3'>{props.header}</p>
          </div>
  )
}

export default Headers