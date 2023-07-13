import React, { useState } from 'react'
import { styled } from '@mui/material/styles'

const Tooltip = ({ delay, children, title, placement }) => {
  let timeout
  const [active, setActive] = useState(false)

  const show = () => {
    timeout = setTimeout(() => {
      setActive(true)
    }, delay || 100)
  }

  const hide = () => {
    clearInterval(timeout)
    setActive(false)
  }

  return (
    <Wrapper onMouseEnter={show} onMouseLeave={hide}>
      {children}
      {active && <div className={`tooltip ${placement || 'top'}`}>{title}</div>}
    </Wrapper>
  )
}

export default Tooltip

const Wrapper = styled('div')(() => ({
  position: 'relative',
  '.tooltip': {
    position: 'absolute',
    borderRadius: 'var(--radius)',
    left: '50%',
    transform: ' translateX(-50%)',
    padding: '6px',
    color: 'var(--bg-p-200)',
    background: 'var(--table-line-dark)',
    zIndex: '100',
    whiteSpace: 'nowrap',
    '::before': {
      content: '""',
      left: '50%',
      border: ' solid transparent',
      height: '0',
      width: '0',
      position: 'absolute',
      borderWidth: '4px',
      marginLeft: '-4px',
    },
  },

  '.tooltip.top ': {
    top: ' -40px',
    '::before': {
      top: ' 100%',
      borderTopColor: 'var(--table-line-dark)',
    },
  },
  '.tooltip.right': {
    left: 'calc(100% + 10px)',
    top: ' 50%',
    transform: ' translateX(0) translateY(-100%)',
    '::before': {
      left: '-4px',
      top: ' 50%',
      transform: 'translateX(0) translateY(-50%)',
      borderRightColor: 'var(--table-line-dark)',
    },
  },
  ' .tooltip.bottom': {
    bottom: '-40px',
    '::before': {
      bottom: '100%',
      borderBottomColor: 'var(--table-line-dark)',
    },
  },
  ' .tooltip.left': {
    left: 'auto',
    right: ' calc(100% + 10px)',
    top: ' 50%',
    transform: 'translateX(0) translateY(-50%)',
    '::before': {
      left: 'auto',
      right: '-8px',
      top: '50%',
      transform: ' translateX(0) translateY(-50%)',
      borderLeftColor: 'var(--table-line-dark)',
    },
  },
}))
