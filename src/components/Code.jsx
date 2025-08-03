import React from 'react'


function queryFormat(query){
    const queries = query.split(';');
    const output = [];
    for(let query of queries){
        if(query.trim() != ''){
            output.push(query);
        }
    }

    return output;
}

function Code(props) {
    console.log(props.children)
  return (
    <div className='codeContainer bg-dark-900 rounded-lg'>
        <div className="copyContainer bg-dark-800 text-light-300 rounded-sm">COPY</div>
        {props.children}
    </div>
  )
}

export default Code