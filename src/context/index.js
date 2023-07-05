import React, { useState, useContext, useEffect } from 'react'
import { Sudoku, saveLocal } from '../functions'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)

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

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isActive, setIsActive] = useState(true)
  const openModal = () => {
    setIsModalOpen(true)
    setIsActive(false)
  }
  const closeModal = () => {
    setIsModalOpen(false)
    setIsActive(true)
  }

  const [isNoteON, setIsNoteON] = useState(false)

  const toggleNote = () => {
    setIsNoteON(!isNoteON)
  }
  //
  const [unSolved, setUnSolved] = useState(saveLocal('unSolved'))
  const [Solved, setSolved] = useState(saveLocal('Solved'))

  const tableGenerator = (K) => {
    setLoading(true)
    const sudoku = new Sudoku(9, K)
    sudoku.fillValues()
    setUnSolved(sudoku.printSudoku())
    setSolved(sudoku.printAnswer())
    // console.log(sudoku.empty)
    if (sudoku.printSudoku().length > 0) {
      setLoading(false)
    }
  }
  useEffect(() => {
    tableGenerator(40)
  }, [])
  //selected coloring
  console.log(isNoteON)
  const [selectedNumber, setSelectedNumber] = useState('')
  const [selectedNumberIndex, setSelectedNumberIndex] = useState('')
  const [selectedSquare, setSelectedSquare] = useState('')
  const [mistakes, setMistakes] = useState(0)
  const writeNumberInTable = (number) => {
    if (selectedNumber === 0) {
      for (let i = 0; i < unSolved.length; i++) {
        if (i === selectedSquare) {
          const newArray = unSolved[i]
          for (let j = 0; j < newArray.length; j++) {
            if (j === selectedNumberIndex) {
              if (whatMustBe() === number) {
                newArray[j] = number
              } else {
                setMistakes(mistakes + 1)
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
  console.log(whatMustBe())

  useEffect(() => {
    localStorage.setItem('unSolved', JSON.stringify(unSolved))
    localStorage.setItem('Solved', JSON.stringify(Solved))
  }, [unSolved, Solved])

  const [endModal, setEndModal] = useState(false)
  const secondeChanceHandler = () => {
    setEndModal(false)
    setMistakes(2)
  }
  const newGameHandler = () => {
    setEndModal(false)
    setMistakes(0)
    tableGenerator(1)
    //new modal and get this k and routing
  }

  return (
    <AppContext.Provider
      value={{
        loading,
        endModal,
        width,
        isActive,
        isModalOpen,
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
        unSolved,
        mistakes,
        setMistakes,
        setEndModal,
        secondeChanceHandler,
        newGameHandler,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
