import React, { useEffect } from 'react'

import { useGlobalContext } from '../../context'
import { Loading, Maker } from '../../components'

export default function Table({ K }) {
  const { stopModal, unSolved, tableGenerator, empty } = useGlobalContext()

  useEffect(() => {
    tableGenerator(K)
    // eslint-disable-next-line
  }, [])

  if (!unSolved) {
    return <Loading />
  }
  if (stopModal) {
    return <Maker array={empty} modal />
  } else {
    return <Maker array={unSolved} />
  }
}
