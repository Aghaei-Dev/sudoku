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
          <ReplayIcon sx={{ fontSize: '2rem' }} />
        </IconBtn>
        <p>undo</p>
      </div>
      <div className='item'>
        <IconBtn>
          <ClearIcon sx={{ fontSize: '2rem' }} />
        </IconBtn>
        <p>erase</p>
      </div>
      <div className='item'>
        <IconBtn
          style={{ borderColor: isNoteON && 'var(--blue-500)' }}
          onClick={toggleNote}>
          <Badge content={isNoteON ? 'on' : 'off'} />
          <ModeEditIcon sx={{ fontSize: '2rem' }} />
        </IconBtn>
        <p>notes</p>
      </div>
      <div className='item'>
        <IconBtn>
          <Badge content='4' isHint />
          <LightbulbIcon sx={{ fontSize: '2rem' }} />
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
  color: 'var(--blue-500)',
  background: 'var(--gray-100)',
  border: '2px solid var(--clr-white)',
  position: 'relative',
  '*': {
    cursor: 'pointer',
  },
  ':hover': {
    background: 'var(--gray-200)',
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
      color: 'var(--blue-500)',
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
