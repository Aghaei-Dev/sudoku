import React from 'react'

import {
  Table,
  Difficulty,
  Timer,
  Numbers,
  FourButton,
  Navbar,
  Mistakes,
  NewGame,
  GameOver,
  DifficultyModal,
} from '../components'

import { MainWrapper } from '../assets/styles'
import { useGlobalContext } from '../context'
const Easy = () => {
  const { width, loading, mistakes } = useGlobalContext()

  return (
    <MainWrapper>
      {mistakes === 3 && <GameOver />}

      {/* when routing show this */}
      {/* {true && <NewGame />} */}
      {true && <DifficultyModal />}

      <div className='top-row'>
        {width >= 980 ? <Navbar difficulty /> : <Difficulty mode='easy' />}
        <Mistakes miss={mistakes} />
        <Timer />
      </div>
      <div className={`table ${loading && 'loading'}`}>
        <Table />
      </div>
      <div className={`right ${loading && 'loading'}`}>
        <FourButton />
        <Numbers />
      </div>
    </MainWrapper>
  )
}

export default Easy
