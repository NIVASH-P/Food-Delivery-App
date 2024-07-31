import { createContext, useEffect, useState } from "react";
import { food_list } from "../../Assests/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cardItems, setCardItems] = useState({});

  const addToCard = (itemId) => {
    if (!cardItems[itemId]) {
      setCardItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCard = (itemId) => {
    // console.log("Hello");
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  useEffect(() => {
    // console.log("from context", cardItem-);
  }, [cardItems]);

  const contextValue = {
    food_list,
    cardItems,
    setCardItems,
    addToCard,
    removeFromCard,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;