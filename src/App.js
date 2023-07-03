import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { ErrorPage, Main, Easy, Medium, Hard, Expert, Evil } from './routes'
import { Navbar } from './components'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='' element={<Main />} />
        <Route path='Easy' element={<Easy />} />
        <Route path='Medium' element={<Medium />} />
        <Route path='Hard' element={<Hard />} />
        <Route path='Expert' element={<Expert />} />
        <Route path='Evil' element={<Evil />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
