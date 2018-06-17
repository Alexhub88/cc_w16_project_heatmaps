import React from 'react'

const Button = ({callback, text, className}) => {

  const button = <button onClick={callback} className={className}>{text}</button>

  return button 
    
}

export default Button