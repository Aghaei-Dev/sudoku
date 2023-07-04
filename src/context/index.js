import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [newGModal, setNewGModal] = useState(true)

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

  //selected coloring
  const [selectedNumber, setSelectedNumber] = useState('')
  const [selectedNumberIndex, setSelectedNumberIndex] = useState('')
  const [selectedSquare, setSelectedSquare] = useState('')

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
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
