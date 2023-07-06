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

export const ModalWrapper = styled('div')(() => ({
  textAlign: 'center',
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',
  position: 'absolute',
  zIndex: '100',
  background: 'rgba(0,0,0,.7)',
  display: 'grid',
  placeItems: 'center',
  gap: '1rem',
  '> div': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '.6rem',
    width: '308px',
    padding: '1.75rem',
    background: 'white',
    borderRadius: 'var(--radius)',
    h2: {
      fontSize: '1.2rem',
      color: 'var(--gray-700)',
    },
    p: {
      fontSize: '.8rem',
      color: 'var(--gray-300)',
      fontWeight: '600',
    },
    '.container': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '1rem',
      width: '100%',
    },
  },
}))
