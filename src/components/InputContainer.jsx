import React from 'react'



function DropDown(options){
    return (
        <>
            <select name="" id="" className='bg-dark-800 dropDownContainer rounded-sm'>
                <option value="csv">CSV</option>
                <option value="xml">XML</option>
                <option value="json">JSON</option>
            </select>
        </>
    )
}

function InputContainer(props) {

    const {label="", isInput =true, type="text", setInput, isDropDown=false, options=[], placeholder=""} = props.actions;

    const handleInput = (e) => {
        setInput(e.target.value)
    }
  return (
            <div className="input_contianer">
                <div className="label">
                    <label htmlFor="" className='text-light-300'>{label}</label>
                </div>
                {
                    (isInput && !isDropDown) ?
                        <input type={type} 
                        value={setInput} 
                        onChange={handleInput} 
                        placeholder={placeholder}/> : (
                            isDropDown ? 
                                (
                                    <DropDown/>
                                )
                            :
                            <textarea name="" placeholder={placeholder}></textarea>
                        )
                }
            </div>
  )
}

export default InputContainer