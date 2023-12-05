import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import { gameMode } from '../../assets/constants'
import { hrefCapitalizer } from '../../functions/helpers'
import { href } from '../../functions/helpers'
export default function Difficulty({ mode }) {
  let navigate = useNavigate()
  const hrefA = href()
  useEffect(() => {
    hrefCapitalizer(hrefA)
  }, [hrefA])

  return (
    <Wrapper>
      {window.innerWidth >= 580 && <span>Difficulty : </span>}
      <select
        defaultValue={mode}
        onChange={(e) => {
          navigate(`/${e.target.value}`)
        }}
      >
        {gameMode.map((item) => {
          return (
            <option key={item.id} value={item.gameMode}>
              {item.gameMode}
            </option>
          )
        })}
      </select>
    </Wrapper>
  )
}

const Wrapper = styled('div')(() => ({
  span: {
    fontSize: '1rem',
    fontWeight: '700',
    color: 'var(--text-600)',
  },
  select: {
    background: 'transparent',
    border: 'none',
    outline: 'none',
    margin: '1rem 0 1.5rem',
    fontSize: '.9rem',
    fontWeight: '700',
    color: 'var(--text-300)',
    option: {
      fontSize: '1rem',
      fontWeight: '400',
      color: 'var(--text-900)',
      background: 'var(--bg-main)',
    },
  },
}))
