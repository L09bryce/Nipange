import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import SignUp from './Components/SignUp'

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Login />} path='/login' />
        <Route element={<SignUp />} path='/signUp' />
      </Routes>
    </div>
  )
}

export default App