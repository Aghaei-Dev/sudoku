import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { useGlobalContext } from '../../context'
import { Square, Cell, StopModal, CenterRow } from '../../components'
import { useHref } from 'react-router-dom'
import { gameMode } from '../../assets/constants'

const Maker = ({ array, modal }) => {
  const { initializerAll } = useGlobalContext()
  const href = useHref().slice(1)

  const { able } = gameMode.find((item) => {
    if (item.gameMode === href) {
      return item.id
    }
    return 0
  })
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (show) {
      initializerAll()
    }
    // eslint-disable-next-line
  }, [show])

  return (
    <TableWrapper>
      {array.map((_, i) => {
        return (
          <Square key={i} index={i} number={i}>
            {array[i].map((item, index) => {
              return <Cell number={item} key={index} index={index} square={i} />
            })}
          </Square>
        )
      })}
      {show && <CenterRow able={able} />}
      {modal && <StopModal />}
    </TableWrapper>
  )
}

export default Maker

const TableWrapper = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
  border: ' 1px solid var(--bg-border-dark)',
  borderRadius: ' var(--radius)',
  width: '500px',
  height: '500px',
  cursor: 'pointer',
  position: 'relative',
  color: 'var(--primary-blue-10)',
  // forgive me for this media query
  //for square shape of table we must do this
  '@media (width<= 860px)': {
    width: '450px',
    height: '450px',
  },
  '@media (width<= 798px)': {
    width: '400px',
    height: '400px',
  },
  '@media (width<= 750px)': {
    width: '350px',
    height: '350px',
  },
  '@media (width<= 700px)': {
    margin: 'auto',
    width: '400px',
    height: '400px',
  },
  '@media (width<= 420px)': {
    width: '96vw',
    height: '55vh',
  },
}))
