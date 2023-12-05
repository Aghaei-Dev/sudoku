import { href, themeChanger, hrefCapitalizer } from '../functions/helpers'

test('title should looks like this: Sudoku - Easy Level ', () => {
  hrefCapitalizer('easy')
  expect(document.title).toBe('Sudoku - Easy Level')
})
test('title should looks like this: Sudoku - Easy Level ', () => {
  hrefCapitalizer('')
  expect(document.title).toBe('Sudoku - Easy Level')
})
test('href must be --> easy ||| with slash true --> /easy ', () => {
  const withSlash = href(true)
  const withoutSlash = href()
  const location = window.location.pathname

  expect(withSlash).toBe(location)
  expect(withoutSlash).toBe(location.slice(1))
})
test('root must have the darkMode class', () => {
  const darkMode = true
  themeChanger(darkMode, '', 'darkMode')
  expect(document.documentElement.classList.contains('darkMode')).toBe(true)
})
test('root must have the green theme class', () => {
  const theme = 'green'
  themeChanger(false, theme, 'green')
  expect(document.documentElement.classList.contains('green')).toBe(true)
})
test('root must have not the green theme class', () => {
  const theme = 'blue'
  themeChanger(false, theme, 'green')
  expect(document.documentElement.classList.contains('green')).not.toBe(true)
})
