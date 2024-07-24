import React, { useContext, useState } from 'react'
import './NavBar.css'
import {assets} from '../../Assests/assets'

export default function NavBar() {
  const[menu,setMenu] = useState('Home')
  return (
    <div className='NavBar'>
        <img src={assets.logo} alt="" className='logo' />
        <ul className='menubar-items'>
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
  )
}
