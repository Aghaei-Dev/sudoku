import React, { useState, useContext, useEffect } from 'react'
import { Sudoku } from '../functions'
import { useLocalStorage } from '../hook'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  const resize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }
  useEffect(() => {
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [width, height])

  const [isNoteON, setIsNoteON] = useState(false)

  const toggleNote = () => {
    setIsNoteON(!isNoteON)
  }

  const [empty, setEmpty] = useState([])

  const [unSolved, setUnSolved] = useLocalStorage('unSolved', [])
  const [Solved, setSolved] = useLocalStorage('Solved', [])

  const tableGenerator = (K) => {
    const sudoku = new Sudoku(9, K)
    sudoku.fillValues()
    setUnSolved(sudoku.rowMaker())
    setSolved(sudoku.rowMakerAnswer())
    setEmpty(sudoku.empty)
  }
  useEffect(() => {
    localStorage.setItem('unSolved', JSON.stringify(unSolved))
    localStorage.setItem('Solved', JSON.stringify(Solved))
  }, [unSolved, Solved])

  //selected coloring
  const [selectedNumber, setSelectedNumber] = useState('')
  const [selectedNumberIndex, setSelectedNumberIndex] = useState('')
  const [selectedSquare, setSelectedSquare] = useState('')
  const [fault, setFault] = useState(false)
  const [mistakes, setMistakes] = useState(0)

  //why this happen?????
  const writeNumberInTable = (number) => {
    setFault(false)
    if (selectedNumber === 0) {
      for (let i = 0; i < unSolved.length; i++) {
        if (i === selectedSquare) {
          const newArray = unSolved[i]
          for (let j = 0; j < newArray.length; j++) {
            if (j === selectedNumberIndex) {
              if (whatMustBe() !== number) {
                newArray[j] = number
                setFault(true)
                setMistakes(mistakes + 1)
              } else {
                newArray[j] = number
                setFault(false)
              }
            }
          }
          unSolved[i] = newArray
        }
      }
      setUnSolved(unSolved)
    }
  }

  const whatMustBe = () => {
    for (let i = 0; i < Solved.length; i++) {
      if (i === selectedSquare) {
        const newArray = Solved[i]
        for (let j = 0; j < newArray.length; j++) {
          if (j === selectedNumberIndex) {
            return newArray[j]
          }
        }
      }
    }
  }

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
    setFault(false)
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
        width,
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
        fault,
        setFault,
        tableGenerator,
        empty,
        closeDifficultyModal,
        restart,
        initializer,
        initializerAll,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
