import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Home from './Components/Hero/Home'
import Sidebar from './Components/Sidebar'
import Budget from './Components/Hero/Budget'
import Financial from './Components/Hero/Financial'
import UserProfile from './Components/Hero/UserProfile'
import Reports from './Components/Hero/Reports'
import Layout from './Components/Layout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Login />} path='/login' />
        <Route element={<SignUp />} path='/signUp' />
        <Route element={<Layout />} path='/'>
        <Route element={<Home />} path='/dashboard' />
        <Route element={<Sidebar />} />
        <Route element={<Budget />} path='/budget' />
        <Route element={<Financial />} path='/financial' />
        <Route element={<Reports />} path='/reports' />
        <Route element={<UserProfile />} path='/profile' />
        </Route>
      </Routes>
    </div>
  )
}

export default App