import React from 'react'

const baseStyle = {
    base : ""
}

function Button({children}) {
  return (
    <button className='units-btn'>        
        {children}
        </button>
  )
}

export default Button