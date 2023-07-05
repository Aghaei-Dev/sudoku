import React from 'react'
import { styled } from '@mui/material/styles'

import { IconButton, Alert } from '@mui/material'

import {
  PlayArrowIcon,
  CloseOutlinedIcon,
  DoneOutlinedIcon,
} from '../../assets/icons'

import { useGlobalContext } from '../../context'

const StopModal = ({ alert }) => {
  const { closeModal, isAlert, canWeNavTrue, canWeNavFalse } =
    useGlobalContext()
  if (alert && isAlert) {
    return (
      <CenterAlert
        severity='error'
        color='error'
        action={
          <>
            <IconButton color='inherit' size='small' onClick={canWeNavTrue}>
              <DoneOutlinedIcon fontSize='inherit' />
            </IconButton>
            <IconButton color='inherit' size='small' onClick={canWeNavFalse}>
              <CloseOutlinedIcon fontSize='inherit' />
            </IconButton>
          </>
        }>
        are you sure?
      </CenterAlert>
    )
  }
  return (
    <Overlay onClick={closeModal}>
      <IconButton>
        <PlayArrowIcon sx={{ color: 'var(--clr-white)', fontSize: '3rem' }} />
      </IconButton>
    </Overlay>
  )
}

export default StopModal

const CenterAlert = styled(Alert)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  zIndex: '100',
  width: '90%',
}))

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
