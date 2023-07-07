import React from 'react'
import { styled } from '@mui/material/styles'

import { IconButton } from '@mui/material'

import { PlayArrowIcon } from '../../assets/icons'

import { useGlobalContext } from '../../context'

const StopModal = () => {
  const { closeModal } = useGlobalContext()

  return (
    <Overlay onClick={closeModal}>
      <IconButton>
        <PlayArrowIcon sx={{ color: 'var(--clr-white)', fontSize: '3rem' }} />
      </IconButton>
    </Overlay>
  )
}

export default StopModal

const Overlay = styled('div')(() => ({
  width: ' 100%',
  height: ' 100%',
  background: 'var(--clr-white)',
  position: 'absolute',
  display: 'grid',
  placeItems: 'center',
  border: ' 1px solid var(--bg-border-dark)',
  button: {
    background: 'var(--blue-500)',
    transition: 'var(--transition)',
    ':hover': {
      background: 'var(--blue-400)',
    },
  },
}))
