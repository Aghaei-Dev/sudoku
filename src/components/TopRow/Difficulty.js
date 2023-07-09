import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles'
import { useHref, useNavigate } from 'react-router-dom'
import { gameMode } from '../../assets/constants'
import { useGlobalContext } from '../../context'
import { hrefCapitalizer } from '../../functions'

const Difficulty = ({ mode }) => {
  const { width } = useGlobalContext()
  let navigate = useNavigate()
  const href = useHref().slice(1)

  useEffect(() => {
    hrefCapitalizer(href)
  }, [href])

  return (
    <Wrapper>
      {width >= 580 && <span>Difficulty : </span>}
      <select
        defaultValue={mode}
        onChange={(e) => {
          navigate(`/${e.target.value}`)
        }}>
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

export default Difficulty

const Wrapper = styled('div')(() => ({
  span: {
    fontSize: '1rem',
    fontWeight: '700',
    color: 'var(--text-600)',
  },
  select: {
    background: 'var(--bg-main)',
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
    },
  },
}))
