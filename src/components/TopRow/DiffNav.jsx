import React, { useEffect } from 'react'
import { gameMode } from '../../assets/constants'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { hrefCapitalizer } from '../../functions/helpers'
import { href } from '../../functions/helpers'

export default function DiffNav() {
  const hrefA = href()

  useEffect(() => {
    hrefCapitalizer(hrefA)
  }, [hrefA])

  return (
    <Wrapper>
      <ul>
        <p>difficulty:</p>
        {gameMode.map((item) => {
          return (
            <li key={item.id}>
              {
                <Link to={`/${item.gameMode}`}>
                  <Button
                    size='small'
                    className={`${
                      hrefA === item.gameMode ? 'link-btn active' : 'link-btn'
                    }`}
                  >
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

const Wrapper = styled('nav')(() => ({
  padding: '.5rem 0 1rem',
  ul: {
    display: 'flex',
    alignItems: 'center',
    p: {
      fontSize: '1rem',
      fontWeight: '600',
      color: 'var(--text-300)',
    },
    li: {
      margin: '0 .1rem',
    },
  },
  '.link-btn': {
    color: 'var(--text-500)',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  '.link-btn.active': {
    color: ' var(--bg-p-500)',
  },
  '@media (width<= 350px)': {
    padding: '0',
    '.link-btn': {
      padding: '0',
    },
  },
}))
