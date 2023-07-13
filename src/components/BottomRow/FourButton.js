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
import { Badge, Tooltip } from '..'

const FourButton = () => {
  const {
    isNoteON,
    toggleNote,
    eraseNumber,
    hintHandler,
    hintRemain,
    closeModal,
    stopModal,
  } = useGlobalContext()

  return (
    <Wrapper>
      <div className='item'>
        <IconBtn
          onClick={() => {
            if (stopModal) closeModal()
          }}>
          <ReplayIcon className='size' />
        </IconBtn>
        <p>undo</p>
      </div>
      <div className='item'>
        <Tooltip title='HotKey : d , delete , backSpace'>
          <IconBtn
            onClick={() => {
              eraseNumber()
              if (stopModal) closeModal()
            }}>
            <ClearIcon className='size' />
          </IconBtn>
        </Tooltip>

        <p>erase</p>
      </div>
      <div className='item'>
        <Tooltip title='HotKey : n'>
          <IconBtn
            onClick={() => {
              if (stopModal) {
                closeModal()
              } else {
                toggleNote()
              }
            }}>
            <BorderWrapper isNoteON={isNoteON} />

            <Badge content={isNoteON ? 'on' : 'off'} />
            <ModeEditIcon className='size' />
          </IconBtn>
        </Tooltip>

        <p>notes</p>
      </div>
      <div className='item'>
        <Tooltip title='Hot Key : h'>
          <IconBtn
            onClick={() => {
              hintHandler()
              if (stopModal) closeModal()
            }}>
            <Badge content={hintRemain} isHint />
            <LightbulbIcon className='size' />
          </IconBtn>
        </Tooltip>

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
  alignSelf: 'start',
  display: 'grid',
  gridTemplateColumns: 'repeat(4,1fr)',
  columnGap: '1rem',
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
  '@media (width<= 700px)': {
    alignSelf: 'stretch',
  },
  '@media (width<= 350px)': {
    padding: '0',
    '.link-btn': {
      padding: '0',
    },
  },
}))

const BorderWrapper = styled('div')(({ isNoteON }) => ({
  borderTop: `3px solid ${isNoteON ? '#377af5' : 'transparent'}`,
  borderRight: `3px solid ${isNoteON ? '#d53e33' : 'transparent'}`,
  borderBottom: `3px solid ${isNoteON ? '#399953' : 'transparent'}`,
  borderLeft: `3px solid ${isNoteON ? ' #fbb300' : 'transparent'}`,
  borderRadius: '50%',
  width: '100%',
  height: '100%',
  position: 'absolute',
  animation: 'rotate 1s linear infinite',

  '@keyframes rotate ': {
    '100%': {
      transform: 'rotate(1turn)',
    },
  },
}))
