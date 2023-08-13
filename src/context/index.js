import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  createContext,
} from 'react'
import useSound from 'use-sound'
import { Sudoku, safeRowSquare, safeColSquare } from '../functions'
import { useLocalStorage } from '../hook'
import { falseSound, trueSound, stop, play } from '../assets/sound'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [playAudio, setPlayAudio] = useLocalStorage('playAudio', true)

  const [isNoteON, setIsNoteON] = useState(false)
  const toggleNote = () => setIsNoteON(!isNoteON)

  const [unSolved, setUnSolved] = useLocalStorage('unSolved', [])
  const [Solved, setSolved] = useState([])
  const [empty, setEmpty] = useState([])

  const tableGenerator = (K) => {
    const sudoku = new Sudoku(9, K)
    sudoku.fillValues()
    setUnSolved(sudoku.rowMaker())
    setSolved(sudoku.rowMakerAnswer())
    setEmpty(sudoku.empty)
    setHintRemain(3)
  }
  //for coloring table
  const [selectedNumber, setSelectedNumber] = useState('')
  const [selectedNumberIndex, setSelectedNumberIndex] = useState('')
  const [selectedSquare, setSelectedSquare] = useState('')

  const [mistakes, setMistakes] = useLocalStorage('mistakes', 0)
  const [hintRemain, setHintRemain] = useLocalStorage('hintRemain', 3)

  //for undo purpose
  const [stack, setStack] = useState([])

  const [mustChange, setMustChange] = useState(false)

  //table manipulating
  let conditionForSelectingCells =
    selectedSquare ||
    selectedNumberIndex ||
    (selectedSquare === 0 && selectedNumberIndex === 0)
  if (conditionForSelectingCells) {
    var cell = unSolved[selectedSquare][selectedNumberIndex]
  }
  const [falsePlay] = useSound(falseSound)
  const [truePlay] = useSound(trueSound)

  const howManyRemain = () => {
    const obj = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 }
    for (let i = 0; i < unSolved.length; i++) {
      for (let j = 0; j < unSolved[i].length; j++) {
        obj[unSolved[i][j].val]++
      }
    }
    return obj
  }
  const writeNumberInTable = (number) => {
    if (cell) {
      //toggling val
      if (cell.editable && cell.val === number && !isNoteON) {
        cell.mistake = false
        cell.val = 0
        setMustChange(true)
        setSelectedNumber(0)

        return
      }
      //make real number(user answer)
      if (selectedNumber === 0 && !isNoteON) {
        cell.val = number

        if (whatMustBe() === number) {
          cell.mistake = false
          setSelectedNumber(number)
          playAudio && truePlay()
        } else {
          setStack([
            {
              val: number,
              mistake: cell.mistake,
              selectedSquare: selectedSquare,
              selectedNumberIndex: selectedNumberIndex,
            },
            ...stack,
          ])

          cell.mistake = true
          cell.editable = true
          setMistakes(mistakes + 1)
          playAudio && falsePlay()
        }
        setUnSolved(unSolved)
      }
      //make notes
      if (selectedNumber === 0 && isNoteON) {
        if (cell.note[number] === number) {
          cell.note[number] = null
        } else {
          cell.note[number] = number
        }
      }
      setMustChange(true)
    }
  }

  const whatMustBe = () => Solved[selectedSquare][selectedNumberIndex]

  const eraseNumber = () => {
    if (conditionForSelectingCells && cell.editable) {
      cell.val = 0
      cell.note = []
      cell.mistake = false
      setSelectedNumber(0)
    }
    setMustChange(true)
  }
  const hintHandler = () => {
    if (hintRemain > 0 && selectedNumber === 0 && !isNoteON && cell.val === 0) {
      setHintRemain((prev) => prev - 1)
      cell.val = whatMustBe()
      cell.editable = false
      setUnSolved(unSolved)
      setSelectedNumber(whatMustBe())
    }
    setMustChange(true)
  }
  const undoHandler = () => {
    if (stack.length) {
      const { selectedSquare, selectedNumberIndex } = stack[0]
      let cell = unSolved[selectedSquare][selectedNumberIndex]
      cell.val = 0
      cell.mistake = false

      setSelectedSquare(selectedSquare)
      setSelectedNumber(0)
      setSelectedNumberIndex(selectedNumberIndex)
      stack.shift()
      setMustChange(true)
    }
  }

  useEffect(() => {
    setMustChange(false)
    localStorage.setItem('unSolved', JSON.stringify(unSolved))
    // eslint-disable-next-line
  }, [mustChange])

  // ========= modals =========

  // =====stop=====
  const [stopModal, setStopModal] = useState(false)
  const [isActive, setIsActive] = useState(true)
  const [stopPlay] = useSound(stop)
  const [playPlay] = useSound(play)

  const openModal = () => {
    setStopModal(true)
    setIsActive(false)
    initializer()
    playAudio && stopPlay()
  }
  const closeModal = () => {
    setStopModal(false)
    setIsActive(true)
    playAudio && playPlay()
  }

  // =====end=====
  const [endModal, setEndModal] = useState(false)

  const secondeChanceHandler = () => {
    setEndModal(false)
    setIsActive(true)
    setMistakes(2)
  }
  const newGameHandler = () => setDifficultyModal(true)

  // =====difficulty=====
  const [difficultyModal, setDifficultyModal] = useState(false)

  const closeDifficultyModal = () => {
    setDifficultyModal(false)

    setIsActive(true)
  }

  const closeDifficultyModalRouting = () => {
    closeDifficultyModal(true)
    setEndModal(false)
    setMistakes(0)
    initializer()
  }
  const restart = (K) => {
    closeDifficultyModalRouting()
    tableGenerator(K)
  }

  //make coloring and mistakes to default
  const initializer = () => {
    setSelectedNumber('')
    setSelectedNumberIndex('')
    setSelectedSquare('')
  }
  const initializerAll = () => {
    initializer()
    setMistakes(0)
  }

  //handling keyboard movement keys and numbers and btn

  const move = (arrow, num) => {
    if (conditionForSelectingCells) {
      switch (arrow) {
        case 'ArrowUp':
          if (num / 3 < 1 && selectedSquare < 3) {
            return
          }
          if (num - 3 < 0) {
            setSelectedSquare(safeColSquare(selectedSquare - 3))
            setSelectedNumberIndex(num + 6)
            setSelectedNumber(
              unSolved[safeColSquare(selectedSquare - 3)][num + 6].val
            )
            return
          } else {
            setSelectedNumberIndex(num - 3)
            setSelectedNumber(unSolved[selectedSquare][num - 3].val)
            return
          }
        case 'ArrowDown':
          if (num / 3 >= 2 && selectedSquare >= 6) {
            return
          }
          if (num + 3 > 8) {
            setSelectedSquare(safeColSquare(selectedSquare + 3))
            setSelectedNumberIndex(num - 6)
            setSelectedNumber(
              unSolved[safeColSquare(selectedSquare + 3)][num - 6].val
            )
            return
          } else {
            setSelectedNumberIndex(num + 3)
            setSelectedNumber(unSolved[selectedSquare][num + 3].val)
            return
          }
        case 'ArrowLeft':
          if (selectedSquare % 3 === 0 && selectedNumberIndex % 3 === 0) {
            return
          }
          if (num === 0 || num === 3 || num === 6) {
            setSelectedSquare(safeRowSquare('left', selectedSquare))
            setSelectedNumberIndex(num + 2)
            setSelectedNumber(
              unSolved[safeRowSquare('left', selectedSquare)][num + 2].val
            )

            return
          } else {
            setSelectedNumberIndex(num - 1)
            setSelectedNumber(unSolved[selectedSquare][num - 1].val)
            return
          }
        case 'ArrowRight':
          if (
            (selectedSquare + 1) % 3 === 0 &&
            (selectedNumberIndex + 1) % 3 === 0
          ) {
            return
          }
          if (num + 1 === 3 || num + 1 === 6 || num + 1 === 9) {
            setSelectedSquare(safeRowSquare('right', selectedSquare))
            setSelectedNumberIndex(num - 2)
            setSelectedNumber(
              unSolved[safeRowSquare('right', selectedSquare)][num - 2].val
            )
            return
          } else {
            setSelectedNumberIndex(num + 1)
            setSelectedNumber(unSolved[selectedSquare][num + 1].val)
            return
          }
        default:
          console.log('404')
          return
      }
    } else {
      setSelectedNumber(0)
      setSelectedNumberIndex(0)
      setSelectedSquare(0)
    }
  }
  const handleKeyPress = useCallback(
    (e) => {
      const val = e.key
      const _ = !e.repeat

      //movement
      if (val.includes('Arrow')) {
        const arrow = val
        move(arrow, selectedNumberIndex)
      }

      //insert number
      const number = Number(val)
      if (number && _) {
        writeNumberInTable(number)
      }

      //deleting
      if (
        val === 'Delete' ||
        val === 'Backspace' ||
        val === 'D' ||
        val === 'd'
      ) {
        eraseNumber()
      }

      //hint
      if (val === 'h' || val === 'H' || val === '/') {
        hintHandler()
      }

      //notes
      if ((val === 'N' || val === 'n') && _) {
        toggleNote()
      }

      //undo
      if ((val === 'U' || val === 'u') && _) {
        undoHandler()
      }

      if (val === ' ' && _) {
        if (stopModal) {
          closeModal()
        } else {
          openModal()
        }
      }
    },
    // eslint-disable-next-line
    [
      selectedSquare,
      selectedNumberIndex,
      selectedNumber,
      isNoteON,
      mistakes,
      stopModal,
    ]
  )
  useEffect(() => {
    if (!endModal) {
      document.addEventListener('keydown', handleKeyPress)
    }
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress, endModal])

  return (
    <AppContext.Provider
      value={{
        stopModal,
        endModal,
        difficultyModal,
        closeDifficultyModalRouting,
        isActive,
        isNoteON,
        toggleNote,
        openModal,
        closeModal,
        setIsActive,
        selectedNumber,
        setSelectedNumber,
        selectedSquare,
        setSelectedSquare,
        selectedNumberIndex,
        setSelectedNumberIndex,
        writeNumberInTable,
        mistakes,
        setMistakes,
        setEndModal,
        secondeChanceHandler,
        newGameHandler,
        unSolved,
        tableGenerator,
        empty,
        closeDifficultyModal,
        restart,
        initializer,
        initializerAll,
        howManyRemain,
        eraseNumber,
        hintHandler,
        hintRemain,
        playAudio,
        setPlayAudio,
        undoHandler,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
