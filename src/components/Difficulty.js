import React from 'react'
import { useNavigate } from 'react-router-dom'
import { gameMode } from '../assets/constants'
import { styled } from '@mui/material/styles'
import { useGlobalContext } from '../context/'
const Difficulty = ({ mode }) => {
  const { setIsAlert, canWeNav, width } = useGlobalContext()

  let navigate = useNavigate()

  return (
    <Wrapper>
      {width >= 580 && <span>Difficulty : </span>}
      <select
        defaultValue={mode}
        onChange={(e) => {
          if (canWeNav) {
            navigate(`/${e.target.value}`)
          } else {
            setIsAlert(true)
          }
        }}>
        {gameMode.map((item) => {
          return (
            <option key={item.id} value={item.gameMode}>
              {item.gameMode}
            </option>
          )
        })}
      </select>
    </Wrapper>
  )
}

export default Difficulty

//set alert and if user clicked on yes im sure
//then change the route

const Wrapper = styled('div')(() => ({
  span: {
    fontSize: '1rem',
    fontWeight: '700',
    color: 'var(--ten-shade-of-gray-7)',
  },
  select: {
    border: 'none',
    outline: 'none',
    margin: '1rem 0 1.5rem',

    fontSize: '.9rem',
    fontWeight: '700',
    color: 'var(--ten-shade-of-gray-5)',
    option: {
      fontSize: '.9rem',
      fontWeight: '300',
      color: 'var(--ten-shade-of-gray-10)',
      padding: '1rem!important',
    },
  },
}))
