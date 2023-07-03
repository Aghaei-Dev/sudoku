import React from 'react'

import { IconButton, Badge } from '@mui/material'

import ReplayIcon from '@mui/icons-material/Replay'
import ClearIcon from '@mui/icons-material/Clear'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import { useGlobalContext } from '../context/'

const FourButton = () => {
  const { isNoteON, toggleNote } = useGlobalContext()

  return (
    <>
      <div className='four-buttons-and-his-details'>
        <IconButton className='four-btn'>
          <ReplayIcon className='four-icons ' />
        </IconButton>
        <IconButton className='four-btn'>
          <ClearIcon className='four-icons ' />
        </IconButton>
        <Badge
          badgeContent={`${isNoteON ? 'on ' : 'off'}`}
          className={`${isNoteON ? 'badge ' : 'badge not-active'}`}>
          <IconButton
            className={`${isNoteON ? 'four-btn notes' : 'four-btn'}`}
            onClick={toggleNote}>
            <ModeEditIcon className='four-icons ' />
          </IconButton>
        </Badge>
        <Badge badgeContent={3} className='badge'>
          <IconButton className='four-btn'>
            <LightbulbIcon className='four-icons ' />
          </IconButton>
        </Badge>
        <p>undo</p>
        <p>erase</p>
        <p>notes</p>
        <p>hint</p>
      </div>
    </>
  )
}

export default FourButton
