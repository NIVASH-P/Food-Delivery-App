import React, { useState } from 'react'
import { assets } from '../../Assests/assets'
import './Login.css'

export default function Login({setShowLogin}) {
    const[currState,setCurrState] = useState('Login')
  return (
    <div className='Login-popUp'>
      <form className="Login-Container">
        <div className="Login-PopUp-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} className='cross-image' src={assets.cross_icon} alt="" />
        </div>
        <div className="input-components">
            {currState === 'Login' ? <></> : <input type='text' placeholder='Your Name' required/>}
            <input type='email' placeholder='Your Email' required/>
            <input type='password' placeholder='Enter Password' required/>
        </div>
        <button className="input-components-button">{currState === 'Sign Up' ? 'Create Account' : 'Login'}</button>
        <div className="login-popUp-Condition">
            <input type="checkbox" />
            <p>By continuing, i agree to the terms of use and policy</p>
        </div>
        {
            currState === "Login" ? <p >Create an Account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span> </p> : <p>Already Have an Account? <span onClick={()=>setCurrState("Login")}>Login Here</span> </p>
        }
        
        
      </form>
    </div>
  )
}
