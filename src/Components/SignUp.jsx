import React from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'

const SignUp = () => {
  return (
    <div className=''>
        <div className='signUp'>

          <div>
             <h2 className='text-center text-blue-800 font-bold jipange'>JIPANGE</h2>

        <div className='form border-2'>
          <form action="POST" className='ml-3'>
            <div className='p-2 text-center'>
              <h1 className='h1 font-bold'>Create a new account</h1>
              <p className='text1'>It's quick and easy</p>
            </div>
            <hr className='text-gray-300'/>
            <div className='flex py-3'>
               <input className='placeholder:sm border-1 rounded mr-2 border-gray-300 p-1.5' type="text" placeholder='FirstName'/>
               <input className='border-1 rounded border-gray-300 p-1.5' type="text" placeholder='LastName' />
            </div>
            <div className='btns flex py-3'>

              <label htmlFor="" className='border-1 rounded w-20 mr-3 border-gray-300'>Male <input type='radio' name='gender' value="Male" /></label>

              <label htmlFor="" className='border-1 rounded  mr-3 w-20 border-gray-300'>Female <input  type='radio' name='gender' value="Female"/></label>
              <label htmlFor="" className='border-1 rounded w-20 mr-3 border-gray-300'>Custom<input  type='radio' name='gender' value="Custom"/></label>
            </div>
            <div className='py-5'>
              <input type="text" className='border-1 border-gray-300 w-84 rounded p-1.5' placeholder='Mobile Number or email address'/>
              <input type="password" className='border-1 p-1.5 my-3 rounded border-gray-300 w-84' placeholder='New password' />
            </div>
            <div className='text2 font-sans'>
              <p>By clicking Sign Up, you agree to our <span className='text-blue-400 cursor-pointer'>Terms</span> and  <span className='text-blue-400 cursor-pointer'>Privacy </span> Policy.</p>
              <p>You may receive SMS notifications from us and can opt out ant time.</p>
            </div>

            <div className='text-center py-5'>
              <button type='submit' className='bg-blue-400 text-white w-56 rounded'>Sign Up</button><br />
              <Link className='text-blue-400 mt-2' to = "/login">Already have an account?</Link>
            </div>
          </form>
        </div>
          </div>

       

        </div>
      </div>
  )
}

export default SignUp