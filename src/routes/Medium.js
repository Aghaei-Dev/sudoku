import React from 'react'

import { Table, Difficulty, Timer, Numbers, FourButton } from '../components'

const Medium = () => {
  return (
    <>
      <div>
        <div id='top-row'>
          <Difficulty mode='medium' />
          <p>mistakes: 1/3</p>
          <Timer />
        </div>
        <Table N={9} K={61} />
      </div>
      <div>
        <div id='bottom-row'>
          <FourButton />
          <Numbers />
        </div>
      </div>
    </>
  )
}

export default Medium
