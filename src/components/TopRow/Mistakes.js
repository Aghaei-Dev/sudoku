import React from 'react'
import { styled } from '@mui/material/styles'

export default function Mistakes({ miss }) {
  return <Mistake>Mistakes: {miss}/3</Mistake>
}

const Mistake = styled('p')(() => ({
  fontWeight: '600',
  color: 'var(--text-600)',
}))
