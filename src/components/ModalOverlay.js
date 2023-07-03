import React from 'react'
import { IconButton } from '@mui/material'
import {
  PlayArrowIcon,
  CloseOutlinedIcon,
  DoneOutlinedIcon,
} from '../assets/icons'
import { useGlobalContext } from '../context/'
import { styled } from '@mui/material/styles'
import { Alert } from '@mui/material'
import Square from './Square'

const ModalOverlay = ({ alert }) => {
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
      <IconButton className='play-btn'>
        <PlayArrowIcon className='play-btn-icon' />
      </IconButton>
    </Overlay>
  )
}

export default ModalOverlay

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
  transition: 'var(--transition)',
  '.play-btn': {
    background: 'var(--primary-blue-5)',
    transition: 'var(--transition)',
    ':hover': {
      background: 'var(--primary-blue-3)',
    },
  },
  '.play-btn-icon': {
    color: ' #fff',
    fontSize: '3rem',
    transition: ' var(--transition)',
  },
}))
