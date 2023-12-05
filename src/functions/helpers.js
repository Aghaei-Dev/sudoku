export const hrefCapitalizer = (href) => {
  if (href.length) {
    document.title = `Sudoku - ${href[0].toUpperCase() + href.slice(1)} Level`
  }
}

export const themeChanger = (darkMode, theme, color) => {
  if (darkMode || theme === color) {
    document.documentElement.classList.add(color)
  } else {
    document.documentElement.classList.remove(color)
  }
}

export const href = (slash) => {
  const href = window.location.pathname
  return slash ? href : href.slice(1)
}
