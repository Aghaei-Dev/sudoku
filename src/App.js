import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ErrorPage, Main, Easy, Medium, Hard, Expert, Evil } from './pages'
import { Navbar } from './components'
export default function App() {
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

//with lazy loading we have some cons !
//so we do'nt (i mean I) implement here

// import React, { lazy, Suspense } from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { Loading, Navbar } from './components'

// const Main = lazy(() => import('./pages/Main'))
// const Easy = lazy(() => import('./pages/Easy'))
// const Medium = lazy(() => import('./pages/Medium'))
// const Hard = lazy(() => import('./pages/Hard'))
// const Expert = lazy(() => import('./pages/Expert'))
// const Evil = lazy(() => import('./pages/Evil'))
// const ErrorPage = lazy(() => import('./pages/ErrorPage'))
// export default function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Suspense fallback={<Loading />}>
//         <Routes>
//           <Route path='' element={<Main />} />
//           <Route path='easy' element={<Easy />} />
//           <Route path='medium' element={<Medium />} />
//           <Route path='hard' element={<Hard />} />
//           <Route path='expert' element={<Expert />} />
//           <Route path='evil' element={<Evil />} />
//           <Route path='*' element={<ErrorPage />} />
//         </Routes>
//       </Suspense>
//     </Router>
//   )
// }
