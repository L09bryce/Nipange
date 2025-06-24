import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <div className='flex-1'>
            <Navbar />
            <main className=''>
                <Outlet />
            </main>
        </div>
    </div>
  )
}

export default Layout