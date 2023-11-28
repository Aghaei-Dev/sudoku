import React from 'react'

import { IconButton, SvgIcon } from '@mui/material'
import { styled } from '@mui/material/styles'

import { useGlobalContext } from '../../context'
import { Badge, Tooltip } from '..'

export default function FourButton() {
  const {
    isNoteON,
    toggleNote,
    eraseNumber,
    hintHandler,
    hintRemain,
    undoHandler,
  } = useGlobalContext()

  return (
    <Wrapper>
      <CatBtn
        btnText='undo'
        tipTitle='HotKey : u'
        handler={undoHandler}
        svgPathD='M13.71 2.46a1 1 0 01.14 1.32l-.08.1-2.15 2.32 3.41.02a10 10 0 11-10 10 1 1 0 112 0 8 8 0 108.25-8h-.25l-3.48-.02 2.28 2.53a1 1 0 01.01 1.32l-.09.1a1 1 0 01-1.32 0l-.09-.08-3.76-4.18a1 1 0 01-.07-1.25l.08-.1 3.7-4.02a1 1 0 011.42-.06z'
      />
      <CatBtn
        btnText='erase'
        tipTitle='HotKey : d , delete , backSpace'
        handler={eraseNumber}
        svgPathD='M27.13 25.11a1 1 0 01.12 2h-6.9a1 1 0 01-.11-2H27.13zM21.48 4.08l.17.14.16.15 3.76 3.76a4 4 0 01.15 5.5l-.15.16-11.32 11.32h2.04a1 1 0 011 .89v.11a1 1 0 01-.88 1H6.52a3 3 0 01-1.98-.74l-.14-.14-2.23-2.22a4 4 0 01-.15-5.5l.15-.16L16.15 4.37a4 4 0 015.33-.29zm-11.52 9.3l-6.38 6.38a2 2 0 00-.11 2.7l.11.13 2.23 2.23a1 1 0 00.58.28l.13.01h4.9l5.13-5.13-6.59-6.6zm7.87-7.82l-.14.1-.13.13-6.18 6.18 6.59 6.6 6.19-6.2a2 2 0 00.11-2.7l-.11-.12-3.77-3.76a2 2 0 00-2.56-.22z'
      />
      <CatBtn
        btnText='notes'
        tipTitle='HotKey : n'
        handler={toggleNote}
        svgPathD='M25.43 4.76a5.42 5.42 0 01.19 7.52l-.18.2-13.5 13.48a.91.91 0 01-1.21.08l-.1-.08-5.07-5.08-.59 4.34 3.25-.44c.44-.05.84.2 1 .58l.03.11.02.11c.06.47-.24.91-.7 1.03l-.1.02-4.45.6a.94.94 0 01-.79-.27.92.92 0 01-.26-.65v-.13l1-7.4a.92.92 0 01.19-.44l.08-.09L17.71 4.76a5.45 5.45 0 017.72 0zm.35 20.08a1 1 0 110 2h-8.7a1 1 0 010-2h8.7zM21.4 10.18L9.43 22.13 11.3 24l11.95-11.95-1.86-1.86zm-3.23-3.23L6.2 18.91l1.92 1.91L20.07 8.86l-1.9-1.9zm3.42-1.93c-.69 0-1.35.2-1.92.56l-.15.1 5.01 5 .1-.14c.33-.5.51-1.09.55-1.7l.01-.22a3.58 3.58 0 00-3.6-3.6z'
        specialContent={
          <>
            <BorderWrapper
              isNoteON={isNoteON}
              color1='#377af5'
              color2='#d53e33'
              color3='#399953'
              color4='#fbb300'
            />
            <Badge content={isNoteON ? 'on' : 'off'} />
          </>
        }
      />
      <CatBtn
        btnText='hint'
        tipTitle={`${isNoteON ? 'turn note off !' : 'Hot Key : h'}`}
        disableRipple={isNoteON}
        handler={hintHandler}
        svgPathD='M17.3 25.91c.5 0 .91.48.91 1.08 0 .59-.4 1.07-.91 1.07h-4.6c-.5 0-.91-.48-.91-1.07 0-.6.4-1.08.91-1.08zM15 2.34a9.68 9.68 0 019.64 9.71c0 3.5-1.86 6.7-4.83 8.41-.23.14-.4.39-.5.82a3.21 3.21 0 01-3.13 2.5H13.5a3.21 3.21 0 01-3.17-2.68c-.08-.45-.17-.65-.12-.62a9.72 9.72 0 01-4.85-8.43c0-5.36 4.31-9.7 9.64-9.7zm0 2.15a7.53 7.53 0 00-7.5 7.56 7.57 7.57 0 003.78 6.57c.65.38.99 1.1 1.16 2.12.1.51.54.89 1.06.89h2.68c.5 0 .94-.35 1.05-.83.23-.98.73-1.73 1.5-2.19a7.57 7.57 0 003.77-6.56A7.53 7.53 0 0015 4.5z'
        specialContent={
          <>
            <BorderWrapper
              isNoteON={isNoteON}
              color1='#d53e33'
              color2='#d53e33'
              color3='#d53e33'
              color4='#d53e33'
            />
            <Badge content={hintRemain} isHint />
          </>
        }
      />
    </Wrapper>
  )
}

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
      ' @media  (height<=750px)': {
        display: 'none',
      },
    },
  },
  '@media (width<= 700px)': {
    alignSelf: 'stretch',
    marginTop: '1.3rem',
  },
  '@media (width<= 350px)': {
    padding: '0',
    '.link-btn': {
      padding: '0',
    },
  },
}))
const SVGicon = styled(SvgIcon)(() => ({
  fontSize: '2rem',
}))
const IconBtn = styled(IconButton)(() => ({
  cursor: 'pointer',
  padding: '1rem',
  color: 'var(--bg-p-500)',
  background: 'var(--text-100)',
  position: 'relative',
  transition: ' background 0.3s ',

  '*': {
    cursor: 'pointer',
  },
  ':hover': {
    background: 'var(--text-200)',
  },
}))

const BorderWrapper = styled('div')(
  ({ isNoteON, color1, color2, color3, color4 }) => ({
    borderTop: `3px solid ${isNoteON ? color1 : 'transparent'}`,
    borderRight: `3px solid ${isNoteON ? color2 : 'transparent'}`,
    borderBottom: `3px solid ${isNoteON ? color3 : 'transparent'}`,
    borderLeft: `3px solid ${isNoteON ? color4 : 'transparent'}`,
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
  })
)

//call action button
const CatBtn = ({
  btnText,
  tipTitle,
  handler,
  svgPathD,
  disableRipple,
  specialContent,
}) => {
  const { closeModal, stopModal } = useGlobalContext()
  return (
    <div className='item'>
      <Tooltip title={tipTitle}>
        <IconBtn
          disableRipple={disableRipple}
          onKeyDown={(e) => e.preventDefault()}
          onClick={() => {
            if (stopModal) closeModal()
            else {
              handler()
            }
          }}
        >
          {specialContent}
          <SVGicon>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 31'>
              <path
                fill={disableRipple ? 'var(--text-500)' : 'var(--bg-p-500)'}
                d={svgPathD}
              ></path>
            </svg>
          </SVGicon>
        </IconBtn>
      </Tooltip>
      <p>{btnText}</p>
    </div>
  )
}
