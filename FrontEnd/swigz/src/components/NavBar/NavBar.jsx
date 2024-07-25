import React, { useContext, useState } from 'react'
import './NavBar.css'
import {assets} from '../../Assests/assets'
import { Link, useNavigate } from 'react-router-dom'

export default function NavBar({setShowLogin}) {
  const[menu,setMenu] = useState('Home')
  const nav = useNavigate();
  return (
    <div className='NavBar'>
        <img src={assets.logo} alt="" className='logo' />
        <ul className='menubar-items'>
            <li  onClick={()=>{setMenu('Home')
              nav("/")
            }} className={menu === 'Home' ? 'active' : ''}>Home</li>
            <li onClick={()=>{setMenu('menu')
              nav("/menu")
            }} className={menu === 'menu' ? 'active' : ''}>menu</li>
            <li component={Link} to='/mobile-app' onClick={()=>{setMenu('mobile-app')
              nav("/mobile-app")
            }} className={menu === 'mobile-app' ? 'active' : ''}>mobile-app</li>
            <li component={Link} to={'/contact us'} onClick={()=>{setMenu('contact us')
              nav("/contact us")
            }} className={menu === 'contact us' ? 'active' : ''}>contact us</li>
        </ul>
        <div className='navBar-right'>
          <Link to='search_icon'>
            <img src={assets.search_icon} alt="" />
          </Link>
            <div className="navBarSearch-icons">
              <Link to='/basket_icon'>
                <img src={assets.basket_icon} alt="" />
              </Link>
              <div className="dot"></div>
            </div>
            <button className='navBar-Button' onClick={()=>setShowLogin(true)}>sign in</button>
            <ul>
            <li onClick={()=>{setMenu('Home')}} className={menu === 'Home' ? 'active' : ''}>Home</li>
            <li onClick={()=>{setMenu('menu')}} className={menu === 'menu' ? 'active' : ''}>menu</li>
            <li onClick={()=>{setMenu('mobile-app')}} className={menu === 'mobile-app' ? 'active' : ''}>mobile-app</li>
            <li onClick={()=>{setMenu('contact us')}} className={menu === 'contact us' ? 'active' : ''}>contact us</li>
        </ul>
        <div className='navBar-right'>
            <img src={assets.search_icon} alt="" />
            <div className="navBarSearch-icons">
              <img src={assets.basket_icon} alt="" />
              <div className="dot"></div>
            </div>
            <button className='navBar-Button'>sign in</button>
        </div>
    </div>
    </div>
  )
}
