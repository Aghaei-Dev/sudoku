import React from 'react'
import { styled } from '@mui/material/styles'
const CenterRow = ({ winRate }) => {
  return (
    <Wrapper>
      <p>
        only <span> {winRate} %</span> of players were able to solve this
        puzzle!
      </p>
    </Wrapper>
  )
}

export default CenterRow

const Wrapper = styled('div')(() => ({
  width: '90%',
  background: 'var(--bg-p-500)',
  padding: '1.2rem 1rem',
  borderRadius: 'var(--radius)',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  textAlign: 'center',
  p: {
    color: 'var(--bg-main)',
    span: {
      color: 'var( --bg-percent)',
    },
  },
  animation: 'fading 2.5s infinite',
  '@keyframes fading': {
    ' 0%': { opacity: 0 },
    '50%': { opacity: 1 },
    '100%': { opacity: 0 },
  },
}))
