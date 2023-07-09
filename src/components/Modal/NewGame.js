import React from 'react'
import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'
import { ModalWrapper } from '../../global'

const NewGame = () => {
  return (
    <ModalWrapper>
      <div>
        <h2>start new game</h2>
        <p>current game progress will be lost</p>
        <div className='container'>
          <Btn
            // onClick={firstOn}
            variant='contained'>
            OK
          </Btn>
          <Btn
            // onClick={secondeOn}
            variant='outlined'>
            cancel
          </Btn>
        </div>
        <label htmlFor='ali'>
          <input type='checkbox' id='ali' />
          don't show again
        </label>
      </div>
    </ModalWrapper>
  )
}

export default NewGame

const Btn = styled(Button)(({ variant }) => ({
  textTransform: 'capitalize',
  fontWeight: '600',
  color: variant === 'outlined' && 'var(--text-300)',
  background: variant === 'contained' ? 'var(--bg-p-500)' : 'transparent',
  width: '50%',
  borderColor: variant === 'outlined' && 'var(--text-300)',
  ':hover': {
    borderColor: variant === 'outlined' && 'var(--text-500)',
  },
}))
