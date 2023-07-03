import React, { useState, useEffect } from 'react'
import { IconButton } from '@mui/material'
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { useGlobalContext } from '../context/'

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

  // when we gonna change
  // difficulty we must again set reset timer

  return (
    <div id='timer-and-his-btn'>
      <span className='timer-the-time'>
        <span>{minute}</span>
        <span>:</span>
        <span>{second}</span>
      </span>
      <IconButton
        className='timer-icon'
        size='small'
        onClick={() => {
          if (isActive) {
            openModal()
          } else {
            closeModal()
          }
        }}>
        {isActive ? <PauseOutlinedIcon /> : <PlayArrowIcon />}
      </IconButton>
    </div>
  )
}

export default Timer

// #timer-and-his-btn {
//   display: flex;
//   justify-content: end;
//   gap: 3px;
// }
// .timer-the-time {
//   padding: 0.3rem 0.4rem;
//   letter-spacing: 3px;
//   color: var(--ten-shade-of-gray-6);
// }
// .timer-icon {
//   background: var(--ten-shade-of-gray-2) !important;
//   font-size: 1rem !important;
//   padding: 0 0.3rem !important;
// }
// .icon {
//   font-size: 1.4rem !important;
//   color: var(--ten-shade-of-gray-6);
// }
