import React, { useEffect } from 'react'
import { gameMode } from '../../assets/constants'
import { Link, useHref } from 'react-router-dom'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

const Navbar = ({ difficulty }) => {
  const href = useHref().slice(1)

  useEffect(() => {
    if (href.length > 0) {
      document.title = `Sudoku - ${
        href.charAt(0).toUpperCase() + href.slice(1) //for capitalize
      } Level`
    }
  }, [href])

  return (
    <Wrapper difficulty={difficulty}>
      <ul>
        {difficulty && <p>difficulty:</p>}
        {gameMode.map((item) => {
          return (
            <li key={item.id}>
              {
                <Link to={`/${item.gameMode}`}>
                  <Button
                    size={difficulty ? 'small' : ''}
                    className={`${
                      href === item.gameMode ? 'link-btn active' : 'link-btn'
                    }`}>
                    {item.gameMode}
                  </Button>
                </Link>
              }
            </li>
          )
        })}
      </ul>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled('nav')(({ difficulty }) => ({
  borderBottom: !difficulty && 'solid 1px var(--bg-border)',
  padding: difficulty ? '.5rem 0 1rem' : '0.5rem 0',
  ul: {
    display: 'flex',
    justifyContent: !difficulty && ' space-between',
    alignItems: 'center',
    p: {
      fontSize: '1rem',
      fontWeight: '600',
      color: 'var(--gray-300)',
    },
    li: {
      margin: difficulty && '0 .1rem',
    },
  },
  '.link-btn': {
    color: 'var(--gray-500)',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  '.link-btn.active': {
    color: ' var(--blue-500)',
  },
  '@media (width<= 350px)': {
    padding: '0',
    '.link-btn': {
      padding: '0',
    },
  },
}))
