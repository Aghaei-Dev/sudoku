import { useState, useEffect } from 'react'

export const useStorage = (type, key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currentValue

    try {
      currentValue = JSON.parse(
        type === 'localStorage'
          ? localStorage.getItem(key) || String(defaultValue)
          : sessionStorage.getItem(key) || String(defaultValue)
      )
    } catch (error) {
      currentValue = defaultValue
    }

    return currentValue
  })

  useEffect(() => {
    type === 'localStorage'
      ? localStorage.setItem(key, JSON.stringify(value))
      : sessionStorage.setItem(key, JSON.stringify(value))
  }, [value, key, type])

  return [value, setValue]
}
