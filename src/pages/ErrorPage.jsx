import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'
import { HomeOutlinedIcon } from '../assets/icons'
export default function ErrorPage() {
  return (
    <Wrapper>
      <div className='flex-center'>
        <h1>Looks like you got lost 🤣</h1>
        <p>We can't seem to find the page you're looking for</p>
        <Link to=''>
          <Btn
            endIcon={<HomeOutlinedIcon sx={{ marginBottom: '.3rem' }} />}
            size='large'
            variant='contained'>
            Back
          </Btn>
        </Link>
      </div>
    </Wrapper>
  )
}

const Btn = styled(Button)(() => ({
  background: 'var(--bg-p-500)',
  ':hover': {
    background: 'var(--bg-p-600)',
  },
  '*': {
    cursor: 'pointer',
  },
}))

const Wrapper = styled('div')(() => ({
  display: 'grid',
  placeItems: 'center',
  height: '100vh',
  div: {
    padding: '3rem',
    flexDirection: 'column',
    textAlign: 'justify',
    gap: '2.5rem',

    '@media (width<= 460px)': {
      h1: {
        fontSize: '1.1rem',
      },
      p: {
        fontSize: '.7rem',
      },
    },
  },
}))
