import { createContext, useEffect, useState } from "react";
import { food_list } from "../../Assests/assets";

export const StoreContext=createContext(null)

const StoreContextProvider =(props)=>{

    const [cardItems , setCardItems] = useState({});

    const addToCard =(itemId)=>{
             
        if(!cardItems[itemId]){
            setCardItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCardItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))

        }
    }

    const removeFromCard=(itemId)=>{
        setCardItems((prev)=>({...prev,[itemId]:prev[itemId]-1
        }))
    }
        const getTotalcard =()=>{
        let total=0;
        for(const item in cardItems)
        {
            if(cardItems[item]>0){
    
            let iteminfo=food_list.find((product)=>product._id==item);
            total+=iteminfo.price* cardItems[item]
    
            }
        }
        return total;
   }

    const contextValue={
          
        food_list,
        cardItems,
        setCardItems,
        addToCard,
        removeFromCard,
        getTotalcard


    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider
