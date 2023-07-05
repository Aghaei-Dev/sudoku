import React from 'react'
import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'
import { useGlobalContext } from '../../context'
import { ModalWrapper } from '../../assets/styles/index'

const GameOver = () => {
  const { secondeChanceHandler, newGameHandler } = useGlobalContext()
  return (
    <ModalWrapper>
      <div>
        <h2>game over</h2>
        <p>you have made 3 mistakes and lost this game</p>
        <div style={{ flexDirection: 'column' }} className='container'>
          <Btn onClick={secondeChanceHandler} variant='contained'>
            Seconde chance
          </Btn>
          <Btn onClick={newGameHandler} variant='text'>
            new game
          </Btn>
        </div>
      </div>
    </ModalWrapper>
  )
}

export default GameOver

const Btn = styled(Button)(({ variant }) => ({
  textTransform: 'capitalize',
  padding: '.5rem',
  fontWeight: '600',
  background: variant === 'contained' ? 'var(--blue-500)' : 'var(--clr-white)',
  width: variant === 'contained' && '95%',
}))
