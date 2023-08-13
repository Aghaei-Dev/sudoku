import React from 'react'
import { styled } from '@mui/material/styles'
import {
  TimerOutlinedIcon,
  SignalCellularAltOutlinedIcon,
} from '../../assets/icons'
import { useHref } from 'react-router-dom'

export default function Win({ time }) {
  const difficulty = useHref().slice(1)
  return (
    <Overlay>
      <div>
        <h1>excellent</h1>

        <div className='grid'>
          <SignalCellularAltOutlinedIcon />
          <span className='title'>difficulty</span> <span>{difficulty} </span>
          <TimerOutlinedIcon />
          <span className='title'>time</span> <span>{time} </span>
        </div>
      </div>
    </Overlay>
  )
}

const Overlay = styled('div')(() => {
  return {
    width: ' 100%',
    height: ' 100%',
    position: 'absolute',
    display: 'grid',
    placeItems: 'center',
    background: '#0072e3 radial-gradient(circle at 50% 0,#82ffff,#0072e3 53%)',
    margin: 'auto',
    '>div': {
      width: '60%',
      textAlign: 'center',
      color: 'white',
      fontWeight: '500',
    },

    '.grid': {
      paddingTop: '2rem',
      gap: '1rem',
      display: 'grid',
      gridTemplateColumns: '.1fr 1fr .1fr',
      alignItems: 'center',
    },

    '.title': {
      textAlign: 'start',
      alignSelf: 'end',
    },
  }
})
