import { Button } from '@mui/material'
import React from 'react'
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const Numbers = () => {
  return (
    <div id='numbers'>
      {numbers.map((item, index) => {
        return (
          <div
            className='number'
            key={index}
            // onClick={() => {
            //   setInnerSquareWhenNoteIsEnabled([
            //     ...innerSquareWhenNoteIsEnabled,
            //     item,
            //   ])
            // }}>
          >
            {item}
          </div>
        )
      })}
      <Button className='btn'>new Game</Button>
    </div>
  )
}

export default Numbers
// problems
// 1- every props change rendering
// 2-we haven't  array unique from 1 to 9
//3-position of numbers not correct
