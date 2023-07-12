import React, { useState, useContext, useEffect } from 'react'
import { Sudoku } from '../functions'
import { useLocalStorage } from '../hook'

import { falseSound, trueSound, stop, play } from '../assets/sound'
import useSound from 'use-sound'
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
    setHintRemain(3)
  }

  //selected coloring
  const [selectedNumber, setSelectedNumber] = useState('')
  const [selectedNumberIndex, setSelectedNumberIndex] = useState('')
  const [selectedSquare, setSelectedSquare] = useState('')
  const [mistakes, setMistakes] = useLocalStorage('mistakes', 0)
  const [mustChange, setMustChange] = useState(false)
  const [hintRemain, setHintRemain] = useLocalStorage('hintRemain', 3)

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
          truePlay()
        } else {
          cell.mistake = true
          cell.editable = true
          setMistakes(mistakes + 1)
          falsePlay()
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
  const whatMustBe = () => {
    return Solved[selectedSquare][selectedNumberIndex]
  }
  const eraseNumber = () => {
    if (conditionForSelectingCells && cell.editable) {
      cell.val = 0
      cell.note = []
      cell.mistake = false
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
    stopPlay()
  }
  const closeModal = () => {
    setStopModal(false)
    setIsActive(true)
    playPlay()
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

  //key board event
  // const key = (e) => {
  //   const number = Number(e.key)
  //   if (!isNaN(number) && number !== 0) {
  //     return number
  //   }
  // }
  // React.useEffect(() => {
  //   window.addEventListener('keydown', key)

  //   return () => {
  //     window.removeEventListener('keydown', key)
  //   }
  // }, [])

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
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
