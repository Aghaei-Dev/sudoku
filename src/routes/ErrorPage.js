import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'
import { HomeOutlinedIcon } from '../assets/icons'
export default function ErrorPage() {
  return (
    <Wrapper>
      <div>
        <h1>Looks like you got lost 🤣</h1>
        <p>We can't seem to find the page you're looking for</p>
        <Link to=''>
          <Button
            endIcon={<HomeOutlinedIcon sx={{ marginBottom: '.3rem' }} />}
            size='large'
            variant='contained'>
            Back
          </Button>
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')(() => ({
  display: 'grid',
  placeItems: 'center',
  height: '100vh',
  div: {
    padding: '3rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2.5rem',
    textAlign: 'justify',

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
