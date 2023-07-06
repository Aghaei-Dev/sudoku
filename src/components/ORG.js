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
  Loading,
} from '../components'

import { MainWrapper } from '../assets/styles'
import { useGlobalContext } from '../context'
const ORG = ({K,mode}) => {
  const { width, loading, mistakes } = useGlobalContext()

  return (
    <MainWrapper>
      {mistakes === 3 && <GameOver />}
      {loading && <Loading />}
      {/* when routing show this */}
      {/* {true && <NewGame />} */}
      {/* {true && <DifficultyModal />} */}

      <div className='top-row'>
        {width >= 980 ? <Navbar difficulty /> : <Difficulty mode={mode} />}
        <Mistakes miss={mistakes} />
        <Timer />
      </div>
      <div className='table'>
        <Table K={K} />
      </div>
      <div className='right'>
        <FourButton />
        <Numbers />
      </div>
    </MainWrapper>
  )
}

export default ORG
