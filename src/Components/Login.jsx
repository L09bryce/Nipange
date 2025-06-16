import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css'
import { FaRegEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    
    //conts[username, setUsername] = useState();
    //const[time, setTime] = useState();
    const[showPassword, setShowPassword] = useState(false);
    const[showColor, setShowColor] = useState('');

    const togglePassword = () =>{
        setShowPassword(prev => !prev);
    };

    const newColor = (e) =>{
        setShowColor(e.target.value);
    }

    const isInputEmpty = showColor.trim() === '';

        const[greeting, setgreeting] = useState('');

        useEffect(() =>{
            const now = new Date();
            const hour = now.getHours();

            if(hour < 12){
                setgreeting('Good Morning');
            }
            else if(hour <17){
                setgreeting('Good Afternoon');
            }
            else{
                setgreeting('Good Evening');
            }

        }, [])




  return (
    <div>
        <div className="login text-center pt-30">
        <h2 className='font-bold font-serif'>WELCOME TO <span className='text-blue-400'>JIPANGE</span></h2>
        <div className='pl-50 lg:pl-150 pt-2'>
            <div className='nameinitials border-2 border-blue-400 w-24 pt-5'><span className='text-blue-400'>BW</span></div>
        </div>
            <h2 className='pt-10 pb-10 font-bold'>{greeting}, user</h2>
            <form action="">
                <div>
                <label className='my-5 mr-45 pass' htmlFor="password">Password</label><br />
                <input 
                className='password w-56' 
                value={showColor}
                onChange={newColor}
                type={showPassword? 'text' : 'password'} 
                id='password' 
                placeholder='Enter password' />
                <button type='button' className='eye' onClick={togglePassword}>
                    {showPassword? <FaRegEye className='text-blue-400'/> : <FaEyeSlash className='text-blue-400'/>}
                </button>
                <div>
                <p className='mt-5 ml-5 text-blue-400'>Forgot your password?</p>
            </div>
            <button type='submit' 
            disabled={isInputEmpty}
            className={`btn cursor-pointer w-35 text-white ${isInputEmpty ? 'bg-gray-300' : 'bg-blue-400'}`}
            >Let me in</button>
                </div>
            </form>
            <div>
                <Link className='text-blue-300' to= "/signUp">Sign up</Link>
            </div>

        </div>
    </div>
  )
}

export default Login