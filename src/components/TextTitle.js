import React from 'react'
import { CircleIcon } from '../assets/icons'
import { styled } from '@mui/material/styles'
const TextTitle = ({ title }) => {
  return (
    <Wrapper>
      <CircleIcon sx={{ padding: '.45rem ', mr: '1rem' }} fontSize='small' />
      {title}
    </Wrapper>
  )
}

export default TextTitle

const Wrapper = styled('h3')(() => ({
  background: 'var( --bg-light)',
  margin: '2rem 0',
  padding: '2rem 1.5rem ',
  display: 'flex',
  alignItems: 'center',
  color: 'var(--gray-700)',
}))
