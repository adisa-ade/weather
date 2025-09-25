import React from 'react'

const baseStyle = {
    base : ""
}

function Button({children}) {
  return (
    <button className='units-btn'>        
        <div className='btn-children'> 
          {children}          
          </div>
          <div>
          <img src="./images/icon-dropdown.svg" alt="dropdown-icon" />
          </div>
        </button>
  )
}

export default Button