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
        <PlayArrowIcon sx={{ color: 'var(--bg-main)', fontSize: '150%' }} />
      </IconButton>
    </Overlay>
  )
}

export default StopModal

const Overlay = styled('div')(() => ({
  width: ' 100%',
  height: ' 100%',
  position: 'absolute',
  display: 'grid',
  placeItems: 'center',
  border: ' 1px solid var(--table-line-dark)',
  button: {
    background: 'var(--bg-p-500)',
    transition: 'var(--transition)',
    '*': {
      cursor: 'pointer',
    },
    ':hover': {
      background: 'var(--bg-p-500)',
    },
  },
}))