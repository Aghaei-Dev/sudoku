import React from 'react'

import { IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'

import {
  ReplayIcon,
  ClearIcon,
  ModeEditIcon,
  LightbulbIcon,
} from '../../assets/icons'

import { useGlobalContext } from '../../context'
import { Badge } from '..'

const FourButton = () => {
  const { isNoteON, toggleNote } = useGlobalContext()

  return (
    <Wrapper>
      <div className='item'>
        <IconBtn>
          <ReplayIcon className='size' />
        </IconBtn>
        <p>undo</p>
      </div>
      <div className='item'>
        <IconBtn>
          <ClearIcon className='size' />
        </IconBtn>
        <p>erase</p>
      </div>
      <div className='item'>
        <IconBtn
          style={{ borderColor: isNoteON && 'var(--bg-p-500)' }}
          onClick={toggleNote}>
          <Badge content={isNoteON ? 'on' : 'off'} />
          <ModeEditIcon className='size' />
        </IconBtn>
        <p>notes</p>
      </div>
      <div className='item'>
        <IconBtn>
          <Badge content='4' isHint />
          <LightbulbIcon className='size' />
        </IconBtn>
        <p>hint</p>
      </div>
    </Wrapper>
  )
}

export default FourButton

const IconBtn = styled(IconButton)(() => ({
  cursor: 'pointer',
  padding: '1rem',
  color: 'var(--bg-p-500)',
  background: 'var(--text-100)',
  border: '2px solid var(--bg-main)',
  position: 'relative',
  '*': {
    cursor: 'pointer',
  },
  ':hover': {
    background: 'var(--text-200)',
  },
  '.size': {
    fontSize: '2rem',
  },
  '@media (width<= 350px)': {
    padding: '0.5rem',
  },
}))

const Wrapper = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4,1fr)',
  gap: '1rem',
  '.item': {
    display: 'grid',
    placeItems: 'center',
    p: {
      paddingTop: '.5rem',
      alignSelf: 'start',
      color: 'var(--bg-p-500)',
      fontWeight: '500',
    },
  },
  '@media (width<= 350px)': {
    padding: '0',
    '.link-btn': {
      padding: '0',
    },
  },
}))
