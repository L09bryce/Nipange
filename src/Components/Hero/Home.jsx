import React from 'react'
import './Home.css'

const Home = () => {
  
  return (
    <div className='home'>
      <div className='ml-20 pt-20 text-white'>
        <div className='flex'>
          <div className='card text-center'>
          <h2 className='p-5'>
            The total Balance is {}
          </h2>
        </div>
        <div className='card text-center mx-5'>
          <h2 className='p-5'>
            The toal Income is {}
          </h2>
        </div>
        <div className='card text-center'>
          <h2>Total Expenses is {}</h2>
        </div>
        </div>
        <div>
          <h2>Recharts for categories</h2>
        </div>
        <div>
          <h2>Recent Transactions</h2>
        </div>
      </div>
    </div>
  )
}

export default Home