import React, { useContext } from 'react'
import './Fooddisplay.css';
import { StoreContext } from '../Exploremenu/context';
import { FootItem } from '../FoodItems/FootItem';

export const Fooddisplay = ({category}) => {
    
    
    const {food_list}=useContext(StoreContext);
    return (
    <div className='food-display' id='food-display'>

        <h1>Top Dishes near by you</h1>

        <div className="food-display-list">
            {food_list.map((item,index)=>{

                if(category==='All' || category===item.category){

                    return <FootItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                }
            })}
        </div>
    </div>
  )
}