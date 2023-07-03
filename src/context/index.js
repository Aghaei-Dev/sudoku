import React, { useState, useContext, useEffect } from 'react'

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

  return (
    <AppContext.Provider
      value={{
        width,
        isActive,
        isModalOpen,
        isNoteON,
        openModal,
        closeModal,
        setIsActive,
        toggleNote,
        isAlert,
        setIsAlert,
        canWeNav,
        canWeNavTrue,
        canWeNavFalse,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
