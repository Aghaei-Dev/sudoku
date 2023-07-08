import React from 'react'
import { styled } from '@mui/material/styles'
import { CircularProgress } from '@mui/material'
import { ModalWrapper } from '../../global'


const Loading = () => {
  return (
    <Wrapper>
      <span>
        <Loader size={50} thickness={2.8} disableShrink />
        <p>loading game</p>
      </span>
    </Wrapper>
  )
}

export default Loading

const Wrapper = styled(ModalWrapper)(() => ({
  background: 'var(--clr-white)',
  opacity: '.9',
  span: {
    p: {
      marginTop: '1rem',
      fontWeight: '500',
      color: 'var(--gray-500)',
    },
  },
}))
const Loader = styled(CircularProgress)(() => ({
  color: 'var(--gray-300)',
}))
