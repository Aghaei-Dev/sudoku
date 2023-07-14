import React from 'react'
import { styled } from '@mui/material/styles'
import { ModalWrapper } from '../../global'
import { ReplayIcon, GridOnOutlinedIcon } from '../../assets/icons'
import { gameMode } from '../../assets/constants'
import { Link, useHref } from 'react-router-dom'
import { useGlobalContext } from '../../context'

const DifficultyModal = () => {
  const href = useHref().slice(1)
  const { closeDifficultyModal, closeDifficultyModalRouting, restart } =
    useGlobalContext()

  const { id: k } = gameMode.find((item) => {
    if (item.gameMode === href) {
      return item.id
    }
    return 0
  })

  return (
    <Wrapper>
      <div style={{ alignSelf: 'end' }}>
        <h2>select Difficulty</h2>
        <p>current game progress will be lost</p>

        <div className='container'>
          {gameMode.map((item) => {
            const { id, gameMode } = item
            return (
              <Btn
                key={id}
                onClick={() => {
                  gameMode === href ? restart(k) : closeDifficultyModalRouting()
                }}>
                <Link to={`/${gameMode}`}>
                  <GridOnOutlinedIcon />
                  {gameMode}
                </Link>
              </Btn>
            )
          })}
          <Btn onClick={() => restart(k)}>
            <Link to={`/${href}`}>
              <ReplayIcon />
              restart
            </Link>
          </Btn>
        </div>
      </div>
      <Btn sx={{ alignSelf: 'start' }} onClick={closeDifficultyModal}>
        cancel
      </Btn>
    </Wrapper>
  )
}

export default DifficultyModal
const Btn = styled('div')(() => ({
  cursor: 'pointer',
  width: '100%',
  background: 'var(--text-50)',
  border: 'none',
  borderBottom: '1px solid var(--bg-border-light)',
  color: 'var(--bg-p-500)',
  fontWeight: '600',
  '*': {
    cursor: 'pointer',
  },
  ':first-of-type': {
    borderTopLeftRadius: 'var(--radius)',
    borderTopRightRadius: 'var(--radius)',
  },
  ':last-child': {
    borderBottomLeftRadius: 'var( --radius)',
    borderBottomRightRadius: 'var( --radius)',
    borderBottom: 'none',
  },
  ':hover': {
    background: 'var( --text-100)',
  },
  a: {
    textTransform: 'capitalize',
    padding: '.7rem',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    gap: '1rem',
    color: 'var(--bg-p-500)',
  },
}))

const Wrapper = styled(ModalWrapper)(() => ({
  background: 'transparent',
  '.container': {
    flexDirection: 'column',
    gap: '0rem!important',
  },
}))
