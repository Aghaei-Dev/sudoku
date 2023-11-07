import { styled } from '@mui/material/styles'

export const MainWrapper = styled('div')(() => ({
  maxWidth: '900px',
  display: 'grid',
  margin: 'auto',
  gridTemplateRows: 'auto 1fr',
  gridTemplateColumns: 'auto 1fr',
  padding: '.5rem',
  position: 'relative',
  columnGap: '1rem',
  '.top-row': {
    gridColumn: '2 span',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  '.table': {
    width: '100%',
    height: '100%',
  },
  '.right': {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    rowGap: '1rem',
    '@media (width<= 700px)': {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '1rem',
    },
    '@media (width<= 425px)': {
      marginTop: '.5rem',
      rowGap: '.5rem',
    },
  },
  '@media (width<= 700px)': {
    display: 'flex',
    flexDirection: 'column',
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
    background: 'var(--bg-main)',
    borderRadius: 'var(--radius)',
    h2: {
      fontSize: '1.2rem',
      color: 'var(--text-700)',
    },
    p: {
      fontSize: '.8rem',
      color: 'var(--text-300)',
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
