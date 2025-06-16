import React from 'react'
import './SignUp.css'

const SignUp = () => {
  return (
    <div className=''>
      <div className="signPage border-2  pt-15">
        <div className='signUp'>

        <h2 className='text-center font-bold'>WELCOME TO <span className='text-blue-400'>JIPANGE</span></h2>


          <form action="" className='mt-10 text-center'>
            <label className='usName my-5 pr-25' htmlFor="">Enter Username</label><br />
            <input type="text" className='userName mb-2' placeholder='Enter Username'/><br />
            <label htmlFor="" className='pr-20'>Create Password</label><br />
            <input type="password" className='crPassword' placeholder='Enter new password' /><br />
            <label htmlFor="" className='pr-10'>Confirm new password</label>
            <input type="password" className='conPassword' placeholder='Confirm new password' /><br />

            <button className='bg-gray-300 w-48 mt-5 rounded cursor-pointer'>Let me in</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp