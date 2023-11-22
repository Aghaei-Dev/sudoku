import React, { useEffect } from 'react'

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
} from '.'
import { MainWrapper } from '../global'
import { useGlobalContext } from '../context'
export default function ORG({ K, mode }) {
  const {
    loading,
    mistakes,
    difficultyModal,
    setIsActive,
    endModal,
    setEndModal,
  } = useGlobalContext()

  useEffect(() => {
    if (mistakes === 3) {
      setEndModal(true)
      setIsActive(false)
    }
    // eslint-disable-next-line
  }, [mistakes])

  return (
    <MainWrapper>
      {endModal && <GameOver />}
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
