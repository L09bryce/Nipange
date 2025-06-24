import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar w-56 bg-blue-950 text-center text-white'>
        <div>
            <Link to ='/dashboard'>Dashboard</Link>
            <Link to='/financial'>Financial</Link>
            <Link to='/budget'>Budget</Link>
            <Link to='/reports'>Reports</Link>
        </div>
    </div>
  )
}

export default Sidebar