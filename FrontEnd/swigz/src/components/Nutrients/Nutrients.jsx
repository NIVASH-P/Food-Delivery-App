import React, { useContext } from 'react'
import './Nutrients.css';
import { assets, menu_list } from '../../Assests/assets';
import photo from "../../Assests/me.png";
import { Fooddisplay } from '../Fooddisplay/Fooddisplay';
import { days } from '../../Assests/assets';
import { nutrientsfoodbreakfast } from '../../Assests/assets';
import { NutriItems } from './NutriItems';
import Calendar from 'react-calendar';
import { CiEdit } from "react-icons/ci";
import { TbBrandSugarizer } from "react-icons/tb";
import { MdOutlineBloodtype } from "react-icons/md";
import { TbRibbonHealth } from "react-icons/tb";
import { IoPulse } from "react-icons/io5";
import { StoreContext } from '../Exploremenu/context';
export const Nutrients = ({category ,setCategory}) => {
  
  const formatShortWeekday = (locale: String, date: Date) => {
    return date.toLocaleString(locale, { weekday: 'narrow' });
  };

  const {cartItems,food_list, removeFromCart,getTotalcard} = useContext(StoreContext);

  return (
    <div className='nutriants'>
         <div className='side-details'>
            <div className="dash">
            <div className='photo'><img src={photo} alt="" /></div><br/>
            <h3 className='name'>Parthiban</h3><br/>
            <h4 className='name'>6374044907</h4><br/>
          <nav>
          <ul>
            <li><TbBrandSugarizer className='icons'/> Sugar : <span>655</span></li>
            <li><MdOutlineBloodtype className='icons'/>Blood Presuure : <span>180 Points</span></li>
            <li><TbRibbonHealth className='icons'/>Heamoglobin : <span>14 Points</span></li>
            <li><IoPulse className='icons'/>Pulse Rate : <span>74 BPM</span></li>
          </ul>
         </nav>
               <p className='edit'><a href=""><CiEdit className='icon' /></a></p>
            </div>
         </div>
          <hr className='hr vertical' />
         <div className='menu'>
         <h1>Maintain Dietary Balance</h1>
        <p className='explore-menu-text'>A health journey is the sum of small efforts repeated day in and day out</p>
        <div className='explore-menu-list'>
        { days.map((item, index) => {
                            return (
                <div onClick={()=>setCategory(prev=>prev===item.daysname?"Monday":item.daysname)}  key={index} className='explore-menu-list-item'>
                    <img  className={category===item.daysname?"active":""}  src={item.dayimage} alt="" />
                    <p>{item.daysname}</p>
                </div>
            )
        })}
        </div>

          <NutriItems category={category}/>
         </div>
        <div className='right-side'>

       
            <div className='calc'>
                <Calendar  formatShortWeekday={formatShortWeekday}/>
          </div>
          <div className="checkout">
                  <h3>Payment</h3>  

                  <ul>
                    <li>Item Total</li>
                  <li>Rs.{getTotalcard()}</li>
                  </ul>
                  <hr />
                  <ul>
                    <li>Delivery fees</li>
                    <li>Rs.0</li>
                  </ul>

                  <button>CheckOut</button>
            </div>
            </div>
    
    </div>
  )
}
