import React from 'react'

import {
  Table,
  Difficulty,
  Timer,
  Numbers,
  FourButton,
  Navbar,
} from '../components'
import { MainWrapper } from '../assets/styles'
import { useGlobalContext } from '../context'
const Easy = () => {
  const { width } = useGlobalContext()
  return (
    <MainWrapper>
      <div className='top-row'>
        {width >= 980 ? <Navbar difficulty /> : <Difficulty mode='easy' />}
        <p>mistakes: 1/3</p>
        <Timer />
      </div>
      <div className='table'>
        <Table N={9} K={81} />
      </div>

      <div className='right'>
        <FourButton />

        <Numbers />
      </div>
    </MainWrapper>
  )
}

export default Easy
