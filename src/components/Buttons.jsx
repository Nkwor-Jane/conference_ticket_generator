import React from 'react'

const Buttons = ({label, onClick, className}) => {
  return (
    <div className="flex">
        <button onClick={onClick} className={`py-2 px-2 rounded ${className}`}>
          {label}
        </button>
    </div>
  )
}

export default Buttons