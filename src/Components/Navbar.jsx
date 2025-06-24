import React from 'react'
import { FaBell, FaUser } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='navbar flex p-3 ms-auto'>
        <div className='logo'>
            <h3 className='text-xl font-bold'>Track Smart, Spend Wise</h3>
        </div>
        <div className='mx-10'>
            <input type="text" className='search border-2 rounded' placeholder='search' />
        </div>
        <div>
            <FaBell />
        </div>
        <div>
            <FaUser />
        </div>
    </div>
  )
}

export default Navbar