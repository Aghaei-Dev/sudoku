import React from 'react'

import {
  Table,
  Difficulty,
  Timer,
  Numbers,
  FourButton,
  Navbar,
  Mistakes,
  NewGModal,
} from '../components'
import { MainWrapper } from '../assets/styles'
import { useGlobalContext } from '../context'
const Easy = () => {
  const { width, loading, newGModal } = useGlobalContext()

  return (
    <MainWrapper>
      {newGModal && <NewGModal />}
      <div className='top-row'>
        {width >= 980 ? <Navbar difficulty /> : <Difficulty mode='easy' />}
        <Mistakes miss={1} />
        <Timer />
      </div>
      <div className={`table ${loading && 'loading'}`}>
        <Table N={9} K={40} />
      </div>
      <div className={`right ${loading && 'loading'}`}>
        <FourButton />
        <Numbers />
      </div>
    </MainWrapper>
  )
}

export default Easy
