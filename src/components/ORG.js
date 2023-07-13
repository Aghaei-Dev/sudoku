import React from 'react'

import {
  Table,
  Difficulty,
  Timer,
  Numbers,
  FourButton,
  Mistakes,
  // NewGame,
  GameOver,
  DifficultyModal,
  Loading,
  DiffNav,
} from '../components'

import { MainWrapper } from '../global'
import { useGlobalContext } from '../context'
const ORG = ({ K, mode }) => {
  const { loading, mistakes, difficultyModal } = useGlobalContext()
  return (
    <MainWrapper >
      {mistakes === 3 && <GameOver />}
      {loading && <Loading />}
      {difficultyModal && <DifficultyModal />}
      {/* {true && <NewGame />} */}

      <div className='top-row'>
        {window.innerWidth >= 980 ? <DiffNav /> : <Difficulty mode={mode} />}
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

//here we have width
