import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar w-48 bg-blue-950 text-center text-white'>
        <div className='pt-20'>
            <ul className=''>
                <li className='py-7'><Link to ='/dashboard'>Dashboard</Link></li>
                <li className='pb-7'>
                    <Link to='/financial'>Financial</Link>
                </li>
                <li className='pb-5'>
                    <Link to='/budget'>Budget</Link>
                </li>
                <li>
                    <Link to='/reports'>Reports</Link>
                </li>
            </ul>
            <div className='copyright my-20 font-light'>
                &copy; 2025. All right reserved
            </div>
        </div>
    </div>
  )
}

export default Sidebar