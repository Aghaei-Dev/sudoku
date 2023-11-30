import React from 'react'
import { styled } from '@mui/material/styles'
import { useGlobalContext } from '../../context'
export default function Numbers() {
  const {
    writeNumberInTable,
    howManyRemain,
    closeModal,
    stopModal,
    isFastPenON,
    colorizeHandler,
    setSelectedNumber,
    setSelectedNumberIndex,
    setSelectedSquare,
  } = useGlobalContext()

  const selectNumberForFastPen = (number) => {
    colorizeHandler(number)
    setSelectedNumber(number)
    setSelectedNumberIndex('')
    setSelectedSquare('')
    setNumberInFastPen(number)
  }

  const [numberInFastPen, setNumberInFastPen] = React.useState(0)

  return (
    <Wrapper>
      {Object.values(howManyRemain()).map((usedIn, index) => {
        return (
          index !== 0 && (
            <div
              onClick={() => {
                stopModal
                  ? closeModal()
                  : isFastPenON
                  ? selectNumberForFastPen(index)
                  : writeNumberInTable(index)
              }}
              style={{ visibility: usedIn >= 9 && 'hidden' }}
              className={
                isFastPenON && index !== numberInFastPen ? 'disable' : null
              }
              key={index}
            >
              {index}
              <span>{9 - usedIn}</span>
            </div>
          )
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '13vw',
  div: {
    transition: ' background .3s ',
    width: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 'initial',
    color: ' var(--bg-p-500)',
    padding: '0.1rem 0.3rem',
    cursor: 'pointer',
    borderRadius: 'var(--radius)',
    position: 'relative',
    backgroundColor: 'var(--text-50)',
    span: {
      lineHeight: '1',
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,-110%)',
      fontSize: '.8rem',
      color: 'var(--text-700)',
    },
    ':active': {
      backgroundColor: 'var(--text-100)',
    },
  },
  '.disable': {
    opacity: '.2',
    cursor: 'default',
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
      span: {
        top: '100%',
        left: '100%',
        transform: 'translate(-100%,-100%)',
        fontSize: '1rem',
      },
      ':hover': {
        backgroundColor: 'var(--text-200)',
      },
      ':active': {
        backgroundColor: ' var(--text-300)',
      },
    },
  },
}))
