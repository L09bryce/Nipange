import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Login />} path='/login'/>
      </Routes>
    </div>
  )
}

export default App