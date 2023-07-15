import React from 'react'
import { styled } from '@mui/material/styles'
import { useGlobalContext } from '../../context'

const Numbers = () => {
  const { writeNumberInTable, howManyRemain, closeModal, stopModal } =
    useGlobalContext()

  return (
    <Wrapper>
      {Object.values(howManyRemain()).map((usedIn, index) => {
        return (
          index !== 0 && (
            <div
              onClick={() => {
                if (stopModal) {
                  closeModal()
                } else {
                  writeNumberInTable(index)
                }
              }}
              style={{ visibility: usedIn >= 9 && 'hidden' }}
              key={index}>
              {index}
            </div>
          )
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
    color: ' var(--bg-p-500)',
    padding: '0.1rem 0.3rem',
    cursor: 'pointer',
    borderRadius: 'var(--radius)',
    ':active': {
      backgroundColor: 'var(--text-100)',
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
      backgroundColor: 'var(--text-100)',
      ':hover': {
        backgroundColor: 'var(--text-200)',
      },
      ':active': {
        backgroundColor: ' var(--text-300)',
      },
    },
  },
}))
