import React, { useState } from 'react'
import './Login.css'
import { FaRegEye } from "react-icons/fa";

const Login = () => {
    
    //conts[username, setUsername] = useState();
    //const[time, setTime] = useState();
    const[showPassword, setShowPassword] = useState(false);

    const togglePassword = () =>{
        setShowPassword(prev => !prev);
    };




  return (
    <div>
        <div className="login pt-56 pl-56">
        <h2 className='font-bold font-serif'>WELCOME TO <span className='text-blue-400'>JIPANGE</span></h2>
        <div className='pl-15'>
            <div className='nameinitials border-2 border-blue-400 w-24 pt-5'><span className='pl-5 text-blue-400'>BW</span></div>
        </div>
            <h2 className='pt-10 pb-10 font-bold'>Good afternoon, user</h2>
            <form action="">
                <div>
                <label className='my-5' htmlFor="password">Password</label><br />
                <input className='password w-56' type={showPassword? 'text' : 'password'} id='password' placeholder='Enter password' />
                <button className='eye' onClick={togglePassword}>
                <FaRegEye className='text-blue-400'/>
                </button>
                </div>
            </form>
            <div>
                <p className='mt-5 ml-5 text-blue-400'>Forgot your password?</p>
            </div>
        </div>
    </div>
  )
}

export default Login