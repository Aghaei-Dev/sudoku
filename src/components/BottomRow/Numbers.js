import React from 'react'
import { numbers } from '../../assets/constants'
import { styled } from '@mui/material/styles'
import { useGlobalContext } from '../../context'

const Numbers = () => {
  const { writeNumberInTable } = useGlobalContext()

  const key = (e) => {
    if (numbers.find((item) => item === Number(e.key))) {
      console.log(Number(e.key))
    }
  }
  React.useEffect(() => {
    window.addEventListener('keydown', key)
    return () => {
      window.removeEventListener('keydown', key)
    }
  }, [])
  return (
    <Wrapper>
      {numbers.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              writeNumberInTable(item)
            }}>
            {item}
          </div>
        )
      })}
    </Wrapper>
  )
}

export default Numbers

const Wrapper = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '13vw',
  div: {
    lineHeight: 'initial',
    color: ' var(--blue-500)',
    padding: '0.1rem 0.3rem',
    cursor: 'pointer',
    borderRadius: 'var(--radius)',
    ':active': {
      backgroundColor: 'var(--gray-100)',
    },
  },
  '@media (width>= 701px)': {
    display: 'grid',
    placeItems: 'center',
    gridTemplateColumns: ' repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: '.4rem',
    div: {
      width: '100%',
      height: '100%',
      display: 'grid',
      placeItems: 'center',
      fontSize: '3rem',
      backgroundColor: 'var(--gray-100)',
      ':hover': {
        backgroundColor: 'var(--gray-200)',
      },
      ':active': {
        backgroundColor: ' var(--gray-300)',
      },
    },
  },
}))
