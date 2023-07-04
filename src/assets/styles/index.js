import { styled } from '@mui/material/styles'

export const MainWrapper = styled('div')(() => ({
  width: '100%',
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  gridTemplateColumns: '.6fr .4fr',
  padding: '.5rem',
  position: 'relative',
  margin: 'auto',
  columnGap: '2rem',
  '.top-row': {
    gridColumn: '2 span',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '.loading': {
    opacity: '.4',
  },
  // '.table': { background: 'blue' },
  '.right': {
    // background: 'red',
    display: 'grid',
    gridTemplateRows: '1fr 3fr',
    rowGap: '1rem',
    '@media (width<= 795px)': {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '2rem',
    },
  },
  '@media (width<= 795px)': {
    display: 'flex',
    flexDirection: 'column',
    // background: 'red',
  },
}))
