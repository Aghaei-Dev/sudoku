import React from 'react'
import { styled } from '@mui/material/styles'
const CenterRow = ({ able }) => {
  return (
    <Wrapper>
      <p>
        only <span> {able} %</span> of players were able to solve this puzzle!
      </p>
    </Wrapper>
  )
}

export default CenterRow

const Wrapper = styled('div')(() => ({
  width: '90%',
  background: 'var(--blue-500)',
  padding: '1.2rem 1rem',
  borderRadius: 'var(--radius)',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  textAlign: 'center',
  p: {
    color: 'var(--clr-white)',
    span: {
      color: 'var(--gold)',
    },
  },
  animation: 'fading 2.5s infinite',
  '@keyframes fading': {
    ' 0%': { opacity: 0 },
    '50%': { opacity: 1 },
    '100%': { opacity: 0 },
  },
}))
