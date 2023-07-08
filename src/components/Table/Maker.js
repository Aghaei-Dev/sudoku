import React from 'react'
import { styled } from '@mui/material/styles'
import { useGlobalContext } from '../../context'
import { Square, Cell, StopModal } from '../../components'

const Maker = ({ array, modal }) => {
  const { width } = useGlobalContext()
  return (
    <TableWrapper width={width}>
      {array.map((item, i) => {
        return (
          <Square key={i} index={i} number={i}>
            {array[i].map((item, index) => {
              return <Cell number={item} key={index} index={index} square={i} />
            })}
          </Square>
        )
      })}
      {modal && <StopModal />}
    </TableWrapper>
  )
}

export default Maker

const TableWrapper = styled('div')(({ width }) => ({
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
  '@media (width<= 800px)': {
    width: '96vw',
    height: '60vh',
  },
}))
