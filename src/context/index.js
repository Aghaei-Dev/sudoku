import React, { useState, useContext, useEffect } from 'react'
import { Sudoku } from '../functions'
import { useLocalStorage } from '../hook'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isNoteON, setIsNoteON] = useState(false)
  const toggleNote = () => {
    setIsNoteON(!isNoteON)
  }

  const [unSolved, setUnSolved] = useLocalStorage('unSolved', [])
  const [Solved, setSolved] = useState([])
  const [empty, setEmpty] = useState([])

  const tableGenerator = (K) => {
    const sudoku = new Sudoku(9, K)
    sudoku.fillValues()
    setUnSolved(sudoku.rowMaker())
    setSolved(sudoku.rowMakerAnswer())
    setEmpty(sudoku.empty)
  }

  //selected coloring
  const [selectedNumber, setSelectedNumber] = useState('')
  const [selectedNumberIndex, setSelectedNumberIndex] = useState('')
  const [selectedSquare, setSelectedSquare] = useState('')
  const [mistakes, setMistakes] = useLocalStorage('mistakes', 0)
  const [mustChange, setMustChange] = useState(false)

  //table manipulating

  const howManyRemain = () => {
    const obj = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
    }
    for (let i = 0; i < unSolved.length; i++) {
      for (let j = 0; j < unSolved[i].length; j++) {
        obj[unSolved[i][j].val]++
      }
    }
    return obj
  }
  const writeNumberInTable = (number) => {
    if (selectedNumber === 0) {
      unSolved[selectedSquare][selectedNumberIndex].val = number
      if (whatMustBe() === number) {
        setSelectedNumber(number)
      } else {
        unSolved[selectedSquare][selectedNumberIndex].mistake = true
        unSolved[selectedSquare][selectedNumberIndex].editable = true
        setMistakes(mistakes + 1)
      }
      setUnSolved(unSolved)
    }
    setMustChange(true)
  }

  let conditionForSelectingCells =
    selectedSquare ||
    selectedNumberIndex ||
    (selectedSquare === 0 && selectedNumberIndex === 0)

  const whatMustBe = () => {
    if (conditionForSelectingCells) {
      return Solved[selectedSquare][selectedNumberIndex]
    }
  }
  const eraseNumber = () => {
    if (
      conditionForSelectingCells &&
      unSolved[selectedSquare][selectedNumberIndex].editable
    ) {
      initializer()
      unSolved[selectedSquare][selectedNumberIndex].val = 0
      unSolved[selectedSquare][selectedNumberIndex].editable = false
      unSolved[selectedSquare][selectedNumberIndex].mistake = false
    }
    setMustChange(true)
  }

  useEffect(() => {
    setMustChange(false)
    localStorage.setItem('unSolved', JSON.stringify(unSolved))
  }, [mustChange])
  // ========= modals =========

  // =====stop=====
  const [stopModal, setStopModal] = useState(false)
  const [isActive, setIsActive] = useState(true)
  const openModal = () => {
    setStopModal(true)
    setIsActive(false)
    initializer()
  }
  const closeModal = () => {
    setStopModal(false)
    setIsActive(true)
  }

  // =====end=====
  const [endModal, setEndModal] = useState(false)

  const secondeChanceHandler = () => {
    setEndModal(false)
    setMistakes(2)
  }
  const newGameHandler = () => {
    setEndModal(false)
    setDifficultyModal(true)
  }

  // =====difficulty=====
  const [difficultyModal, setDifficultyModal] = useState(false)
  const closeDifficultyModal = () => {
    setDifficultyModal(false)
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
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
