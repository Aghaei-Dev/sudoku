import React, { useState, useEffect } from 'react'
import { IconButton } from '@mui/material'
import { useGlobalContext } from '../../context'
import { PlayArrowIcon, PauseOutlinedIcon } from '../../assets/icons'
import { styled } from '@mui/material/styles'
import { Tooltip } from '..'
export default function Timer() {
  const { isActive, openModal, closeModal } = useGlobalContext()
  const [second, setSecond] = useState('00')
  const [minute, setMinute] = useState('00')
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    let intervalId
    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60
        const minuteCounter = Math.floor(counter / 60)

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter

        setSecond(computedSecond)
        setMinute(computedMinute)

        setCounter((counter) => counter + 1)
      }, 1000)
    }
    return () => clearInterval(intervalId)
  }, [isActive, counter])

  return (
    <Tooltip placement='left' title='HotKey : space'>
      <Wrapper>
        <p onClick={isActive ? openModal : closeModal}>
          {minute} : {second}
        </p>
        <IconBtn size='small' onClick={isActive ? openModal : closeModal}>
          {isActive ? (
            <PauseOutlinedIcon sx={{ padding: '.3rem' }} />
          ) : (
            <PlayArrowIcon sx={{ padding: '.3rem' }} />
          )}
        </IconBtn>
      </Wrapper>
    </Tooltip>
  )
}

const IconBtn = styled(IconButton)(() => ({
  transition: ' background .3s ',
  padding: '.1rem',
  background: 'var(--text-100)',
  ':hover': {
    background: 'var(--text-200)',
  },
  '*': {
    cursor: 'pointer',
  },
}))

const Wrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '80px',
  p: {
    color: 'var(--text-300)',
    fontWeight: '700',
    cursor: 'pointer',
  },
}))
