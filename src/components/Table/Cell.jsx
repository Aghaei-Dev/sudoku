import React from 'react'
import { styled } from '@mui/material/styles'
import { useGlobalContext } from '../../context'
import { MicroCell } from '..'
export default function Cell({
  val,
  conflict,
  editable,
  mistake,
  note,
  index,
  square,
}) {
  const {
    isNoteON,
    Solved,
    truePlay,
    playAudio,
    setMistakes,
    mistakes,
    falsePlay,
    failedNotePlay,
    //
    setSelectedNumber,
    selectedNumberIndex,
    selectedSquare,
    setSelectedNumberIndex,
    colorizeNumber,
    colorizeHandler,
    isFastPenON,
    unSolved,
  } = useGlobalContext()

  const deleteSingleNote = (number) => {
    if (number) {
      unSolved[selectedSquare].forEach((cell) => {
        cell.note.forEach((singleNote, index) => {
          if (number === singleNote) {
            cell.note[index] = null
          }
        })
      })
    }
  }
  const noteCanAdd = (number) => {
    //in square
    const numberIsAvailableInSquare = unSolved[square].find(
      (cell) => cell.val === number
    )
    if (numberIsAvailableInSquare) {
      failedNotePlay()
      return false
    } else {
      return true
    }
  }

  const writeNumberInTableByFastPen = (number) => {
    const cell = unSolved[square][index]
    const whatMustBe = Solved[square][index]
    //toggling the cell value

    if (cell.editable && cell.val === number && !isNoteON) {
      cell.mistake = false
      cell.val = 0
      return
    }

    //make real number by fast pen
    if (val === 0 && number && !isNoteON) {
      cell.val = number
      if (whatMustBe === number) {
        cell.mistake = false
        deleteSingleNote(number)
        playAudio && truePlay()
      } else {
        //     setStack([
        //       {
        //         val: number,
        //         mistake: cell.mistake,
        //         selectedSquare: selectedSquare,
        //         selectedNumberIndex: selectedNumberIndex,
        //       },
        //       ...stack,
        //     ])

        //   }
        cell.mistake = true
        cell.editable = true
        setMistakes(mistakes + 1)
        playAudio && falsePlay()
      }
    }
    //make notes
    if (val === 0 && isNoteON && noteCanAdd(number)) {
      // toggling the amount of note in the micro cell
      if (cell.note[number] === number) {
        cell.note[number] = null
      } else {
        cell.note[number] = number
      }
    }
  }

  //what must colored !
  //square coloring and same numbers and now cell
  const condition_1 =
    (val === colorizeNumber && colorizeNumber !== 0 && 'var(--bg-p-200)') ||
    (selectedNumberIndex === index &&
      selectedSquare === square &&
      'var(--bg-p-200)')

  return (
    <CellWrapper
      onClick={() => {
        colorizeHandler(val)
        setSelectedNumber(val)
        setSelectedNumberIndex(index)
        isFastPenON && writeNumberInTableByFastPen(colorizeNumber)
      }}
      style={{
        background: condition_1 || (mistake && 'var(--bg-error)'),
        color:
          (mistake && 'var(--clr-error)') ||
          (mistake === false && editable === true && 'var(--bg-p-600)'),
      }}
    >
      {val === 0 ? '' : val}
      {val === 0 && <MicroCell array={note} />}
    </CellWrapper>
  )
}

const CellWrapper = styled('div')(() => ({
  border: '.1rem solid var(--table-line-light)',
  fontSize: ' 1.5rem',
  display: 'grid',
  placeItems: 'center',
  cursor: 'pointer',
  color: 'var(--bg-black)',
  ':hover': { borderColor: 'var(--bg-p-200)' },
  '*': {
    cursor: 'pointer',
  },
}))
