import React from 'react'
import { styled } from '@mui/material/styles'

const Mistakes = ({ miss }) => {
  return <Mistake>Mistakes: {miss}/3</Mistake>
}

export default Mistakes

const Mistake = styled('p')(() => ({
  fontWeight: '700',
  color: 'var(--gray-600)',
}))
