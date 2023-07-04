import React from 'react'
import { styled } from '@mui/material/styles'
import { Button, Checkbox, FormControlLabel } from '@mui/material'

const NewGModal = () => {
  return (
    <Wrapper>
      <div>
        <h2>start new game</h2>
        <p>current game progress will be lost !</p>
        <div className='container'>
          <Button variant='contained' color='primary'>
            ok
          </Button>
          <Button variant='outlined' color='primary'>
            cancel
          </Button>
        </div>
        <FormControlLabel
          control={<Checkbox checked />}
          label="don't ask me again"
        />
      </div>
    </Wrapper>
  )
}

export default NewGModal

const Wrapper = styled('div')(() => ({
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',
  position: 'absolute',
  zIndex: '100',
  background: 'rgba(0,0,0,.7)',
  display: 'grid',
  placeItems: 'center',
  '> div': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '.4rem',
    width: '308px',
    padding: '1rem',
    background: 'white',
    borderRadius: 'var(--radius)',
    h2: {
      fontSize: '1.2rem',
      color: 'var(--gray-700)',
    },
    p: {
      fontSize: '.8rem',
      color: 'var(--gray-400)',
    },
    '.container': {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      button: {
        width: '48%',
      },
    },
  },
  '@media (width<= 350px)': {},
}))
