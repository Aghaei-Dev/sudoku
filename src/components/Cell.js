import React, { useState } from 'react'

const Cell = ({ number, index, inde, clickHandlerCell, selectedCell }) => {
  return (
    <div
      className={selectedCell}
      onClick={() => {
        clickHandlerCell(inde)
        console.log(`square : ${index} - cell : ${inde}`)
      }}>
      {number === 0 ? '' : number}
    </div>
  )
}

export default Cell
