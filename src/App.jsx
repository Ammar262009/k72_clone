import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agency from './pages/Agency'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/agency' element={<Agency />} />
    </Routes>
  )
}

export default App