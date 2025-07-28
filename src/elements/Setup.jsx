import React from 'react'
import InputContainer from '../components/InputContainer'
import "../styles/pages/ActionsWrapper.css"
function Setup() {
  return (
    <div className="inputs_wrapper">
        <div className="user_inputs">
        <InputContainer  actions={{label:"DB Name"}} />
        <InputContainer  actions={{label:"Schema"}} />
        <InputContainer  actions={{label:"Stage"}} />
        <InputContainer  actions={{label:"File Format", isDropDown:true}} />
        <InputContainer  actions={{label:"File Format Name"}} />
        </div>

        <div className="user_button">
            <button className='bg-dark-700'>Config</button>
        </div>

        <div className="links_container">
            <InputContainer actions={{label:"Azure Links" , isInput:false, isDropDown:false, placeholder:"ex: azure://blob/container/customer.csv"}} />
        </div>
        <div className="user_button">
            <button className='bg-dark-700'>Generate</button>
        </div>
    </div>
  )
}

export default Setup