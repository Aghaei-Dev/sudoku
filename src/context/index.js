import React, { useState, useContext, useEffect } from 'react'
import { Sudoku, saveLocal } from '../functions'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [newGModal, setNewGModal] = useState(false)

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

  const [canWeNav, setCanWeNav] = useState(false)
  const [isAlert, setIsAlert] = useState(false)

  const canWeNavTrue = () => {
    setIsAlert(false)
    setCanWeNav(true)
  }
  const canWeNavFalse = () => {
    setIsAlert(false)
    setCanWeNav(false)
  }

  const [isNoteON, setIsNoteON] = useState(false)

  const toggleNote = () => {
    setIsNoteON(!isNoteON)
  }
  //
  const [unSolved, setUnSolved] = useState(saveLocal('unSolved'))
  const [Solved, setSolved] = useState(saveLocal('Solved'))

  const tableGenerator = () => {
    setLoading(true)
    const sudoku = new Sudoku(9, 0)
    sudoku.fillValues()
    setUnSolved(sudoku.printSudoku())
    // setSolved(sudoku.printAnswer())
    // console.log(sudoku.empty)
    if (sudoku.printSudoku().length > 0) {
      setLoading(false)
    }
  }
  useEffect(() => {
    tableGenerator()
  }, [])
  useEffect(() => {
    localStorage.setItem('unSolved', JSON.stringify(unSolved))
    localStorage.setItem('Solved', JSON.stringify(Solved))
  }, [unSolved, Solved])
  //selected coloring
  const [selectedNumber, setSelectedNumber] = useState('')
  const [selectedNumberIndex, setSelectedNumberIndex] = useState('')
  const [selectedSquare, setSelectedSquare] = useState('')
  const [user, setUser] = useState(unSolved)
  const writeNumberInTable = (number) => {
    if (
      selectedNumberIndex &&
      selectedSquare &&
      unSolved[selectedSquare][selectedNumberIndex] === 0
    ) {
      setUser([...user, (user[selectedSquare][selectedNumberIndex] = number)])
      console.log(user[selectedSquare][selectedNumberIndex])
    }
  }

  return (
    <AppContext.Provider
      value={{
        loading,
        newGModal,
        width,
        isActive,
        isModalOpen,
        isNoteON,
        toggleNote,
        openModal,
        closeModal,
        setIsActive,
        isAlert,
        setIsAlert,
        canWeNav,
        canWeNavTrue,
        canWeNavFalse,
        selectedNumber,
        setSelectedNumber,
        selectedSquare,
        setSelectedSquare,
        selectedNumberIndex,
        setSelectedNumberIndex,
        writeNumberInTable,
        unSolved,
        user,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
