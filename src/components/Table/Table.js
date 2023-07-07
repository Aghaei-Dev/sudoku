import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles'

import { StopModal } from '../'
import { useGlobalContext } from '../../context'
import { Square, Cell, Loading } from '../../components'

const Table = ({ K }) => {
  const { isModalOpen, width, unSolved, tableGenerator, loading } =
    useGlobalContext()

  useEffect(() => {
    tableGenerator(K)
  }, [])

  if (loading) {
    return <Loading />
  }
  return (
    <TableWrapper width={width}>
      {unSolved.map((item, i) => {
        return (
          <Square key={i} index={i} number={i}>
            {unSolved[i].map((item, index) => {
              return <Cell number={item} key={index} index={index} square={i} />
            })}
          </Square>
        )
      })}
      {isModalOpen && <StopModal />}
    </TableWrapper>
  )
}

export default Table
const TableWrapper = styled('div')(({ width }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
  border: ' 1px solid var(--bg-border-dark)',
  borderRadius: ' var(--radius)',
  width: '50vw',
  maxWidth: '500px',
  height: width,
  maxHeight: '500px',
  cursor: 'pointer',
  position: 'relative',
  color: 'var(--primary-blue-10)',
  '@media (width<= 800px)': {
    width: '96vw',
  },
}))