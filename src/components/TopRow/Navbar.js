import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles'
import { Button, IconButton } from '@mui/material'
import { Link, useHref } from 'react-router-dom'
import {
  Brightness7OutlinedIcon,
  Brightness4OutlinedIcon,
  GridOnOutlinedIcon,
  VolumeUpOutlinedIcon,
  VolumeMuteOutlinedIcon,
} from '../../assets/icons'
import { themeChanger } from '../../functions'
import { colors } from '../../assets/constants'
import { useLocalStorage } from '../../hook'

import useSound from 'use-sound'
import { switchLight, changeTheme, mute, unmute } from '../../assets/sound'
import { useGlobalContext } from '../../context'

const Navbar = () => {
  const href = useHref()
  const { playAudio, setPlayAudio } = useGlobalContext()
  const [darkModeSound] = useSound(switchLight)
  const [themeSound] = useSound(changeTheme)
  const [mutePlay] = useSound(mute)
  const [unmutePlay] = useSound(unmute)

  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false)
  const [theme, setTheme] = useLocalStorage('theme', 'blue')

  const toggleDarkMode = () => {
    setDarkMode((prevValue) => !prevValue)
    playAudio && darkModeSound()
  }
  const toggleTheme = (colorName) => {
    if (theme !== colorName) {
      setTheme(colorName)
      playAudio && themeSound()
    }
  }
  const muteSound = () => {
    mutePlay()
    setPlayAudio(false)
  }
  const unmuteSound = () => {
    unmutePlay()
    setPlayAudio(true)
  }
  useEffect(() => {
    themeChanger(darkMode, '', 'darkMode')
    themeChanger(false, theme, 'purple')
    themeChanger(false, theme, 'green')
  }, [darkMode, theme])

  return (
    <Wrapper className='flex-between'>
      {href === '/' ? (
        <Link to='easy'>
          <Btn variant='cont' startIcon={<GridOnOutlinedIcon />}>
            play
          </Btn>
        </Link>
      ) : (
        <div className='theme flex-between '>
          theme :
          <div style={{ padding: '0 .5rem' }} className='flex-between '>
            {colors.map((item) => {
              const { id, colorName, value } = item
              return (
                <Circle
                  onClick={() => toggleTheme(colorName)}
                  key={id}
                  color={value}
                  selected={colorName === theme}
                />
              )
            })}
          </div>
        </div>
      )}
      <div className='dark-mode'>
        <div>
          <span onClick={toggleDarkMode}>
            {darkMode ? 'dark' : 'light'} mode
          </span>
          <IconBtn sx={{ ml: 1 }} onClick={toggleDarkMode} color='inherit'>
            {darkMode ? (
              <Brightness4OutlinedIcon />
            ) : (
              <Brightness7OutlinedIcon />
            )}
          </IconBtn>
        </div>
        <IconBtn
          onClick={() => (playAudio ? muteSound() : unmuteSound())}
          color='inherit'>
          {playAudio ? <VolumeUpOutlinedIcon /> : <VolumeMuteOutlinedIcon />}
        </IconBtn>
      </div>
    </Wrapper>
  )
}

export default Navbar
const Btn = styled(Button)(() => ({
  textTransform: 'capitalize',
  color: 'var(--bg-p-500)',
  '*': {
    cursor: 'pointer',
  },
}))
const IconBtn = styled(IconButton)(() => ({
  '*': {
    cursor: 'pointer',
  },
}))
const Circle = styled('span')(({ color, selected }) => ({
  border: `.7rem solid ${color}`,
  borderRadius: '50%',
  margin: '0 .2rem',
  cursor: 'pointer',
  position: 'relative',
  '::after': {
    cursor: 'pointer',
    content: selected && '"✓"',
    fontSize: '1rem',
    color: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
}))
const Wrapper = styled('div')(() => ({
  borderBottom: '1px solid var(--bg-border)',
  padding: '.5rem',

  '.dark-mode': {
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',
    '*': {
      cursor: 'pointer',
    },
  },
  '@media (width<= 400px)': {
    padding: '0rem',
  },
}))
