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
        <Route path='easy' element={<Easy />} />
        <Route path='medium' element={<Medium />} />
        <Route path='hard' element={<Hard />} />
        <Route path='expert' element={<Expert />} />
        <Route path='evil' element={<Evil />} />

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
