import React from 'react'

const Square = ({ children, index, clickHandler, selected }) => {
  return (
    <div
      className={selected}
      onClick={() => {
        clickHandler(index)
      }}>
      {children}
    </div>
  )
}

export default Square
