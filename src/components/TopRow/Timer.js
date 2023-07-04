import React, { useState, useEffect } from 'react'
import { IconButton } from '@mui/material'
import { useGlobalContext } from '../../context'
import { PlayArrowIcon, PauseOutlinedIcon } from '../../assets/icons'
import { styled } from '@mui/material/styles'

const Timer = () => {
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

  // function stopTimer() {
  //   setIsActive(false)
  //   setCounter(0)
  //   setSecond('00')
  //   setMinute('00')
  // }

  return (
    <Wrapper>
      <p>
        {minute} : {second}
      </p>
      <IconButton
        sx={{ padding: '.1rem', background: 'var(--gray-100)' }}
        size='small'
        onClick={isActive ? openModal : closeModal}>
        {isActive ? (
          <PauseOutlinedIcon sx={{ padding: '.3rem' }} />
        ) : (
          <PlayArrowIcon sx={{ padding: '.3rem' }} />
        )}
      </IconButton>
    </Wrapper>
  )
}

export default Timer

const Wrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '80px',
  p: {
    color: 'var(--gray-300)',
    fontWeight: '700',
  },
}))
