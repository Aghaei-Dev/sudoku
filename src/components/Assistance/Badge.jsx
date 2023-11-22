import React from 'react'
import { styled } from '@mui/material/styles'
import { useGlobalContext } from '../../context'

export default function Badge({ content, isHint }) {
  const { isNoteON, hintRemain } = useGlobalContext()
  return (
    <Wrapper isHint={isHint} isNoteON={isNoteON} hintRemain={hintRemain}>
      {content}
    </Wrapper>
  )
}

const Wrapper = styled('span')(({ isHint, isNoteON, hintRemain }) => ({
  transition: 'background .3s ',
  fontWeight: '700',
  textTransform: 'uppercase',
  background:
    (!isNoteON && !isHint) ||
    (isHint && hintRemain === 0) ||
    (isHint && isNoteON)
      ? 'var(--text-300)'
      : 'var(--bg-p-500)',
  color: 'white',
  position: 'absolute',
  top: '0',
  right: '0',
  transform: 'translate(30%,-25%)',
  fontSize: isHint ? '.7rem' : '.6rem',
  width: '25px',
  height: '25px',
  borderRadius: '50%',
  display: 'grid',
  placeItems: 'center',
}))
