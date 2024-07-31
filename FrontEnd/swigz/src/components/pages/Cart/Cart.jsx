import React, { useContext } from "react";
import "./cart.css";
import { StoreContext } from "../../Exploremenu/context";
import { Link } from "react-router-dom";
export const Cart = () => {
  const {
    cardItems: cartItems,
    food_list,
    removeFromCard,
  } = useContext(StoreContext);

  console.log(removeFromCard);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}</p>
                  <p className="cross" onClick={() => removeFromCard(item._id)}>x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p> <p>{0}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>{0}</b>
            </div>
          </div>
          <Link to="/placeorder">
            <button>Proceed</button>
          </Link>
        </div>
        <div className="Cart-promocode">
          <div>
            <p>if u have promo code enter</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
