import { styled } from '@mui/material/styles'

export const MainWrapper = styled('div')(() => ({
  width: '100%',

  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  gridTemplateColumns: '.6fr .4fr',
  padding: '1rem .5rem',
  '.top-row': {
    gridColumn: '2 span',
    width: '100%',
    background: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '.table': { background: 'blue' },
  '.right': {
    background: 'green',
  },
  '@media (width<= 795px)': {
    display: 'flex',
    flexDirection: 'column',
  },
}))
