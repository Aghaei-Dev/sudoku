import React from 'react'
import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'
import { ModalWrapper } from '../../assets/styles/index'
import { ReplayIcon, GridOnOutlinedIcon } from '../../assets/icons'
import { gameMode } from '../../assets/constants'
const DifficultyModal = () => {
  return (
    <Wrapper>
      <div>
        <h2>select Difficulty</h2>
        <p>you have made 3 mistakes and lost this game</p>

        <div className='container'>
          {gameMode.map((item) => {
            const { id, gameMode } = item
            return (
              <Btn
                key={id}
                variant='outlined'
                startIcon={<GridOnOutlinedIcon />}>
                {gameMode}
              </Btn>
            )
          })}
          <Btn variant='outlined' startIcon={<ReplayIcon />}>
            restart
          </Btn>
        </div>
      </div>
    </Wrapper>
  )
}

export default DifficultyModal
const Btn = styled(Button)(() => ({
  width: '100%',
  justifyContent: 'start',
  padding: '.7rem',
  textTransform: 'capitalize',
  background: 'var(--blue-100)',
  color: 'var(--blue-500)',
  fontWeight: '700',
  border: 'none',
  borderBottom: '1px solid red',
}))

const Wrapper = styled(ModalWrapper)(() => ({
  '.container': {
    flexDirection: 'column',
    gap: '0rem!important',
  },
}))
