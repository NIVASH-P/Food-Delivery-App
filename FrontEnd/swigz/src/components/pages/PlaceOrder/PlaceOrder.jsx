import React, { useContext, useEffect, useState } from "react";
import './PlaceOrder.css';
import axios from "axios";
import { LoginContext } from "../../Login/LoginContext";

export const PlaceOrder = () => {
  const [order, setOrder] = useState({
    phonenumber: "",
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: ""
  });
  
  const {currlogin} = useContext(LoginContext);
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        console.log(currlogin);
        const response = await axios.get('http://localhost:8090/get/'+currlogin);
        console.log(response.data);
        setOrder(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrder();
  }, []);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <h2 className="title">Delivery Information</h2>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' value={order.firstname} onChange={(e) => setOrder({ ...order, firstname: e.target.value })} />
          <input type="text" placeholder='Last Name' value={order.lastname} onChange={(e) => setOrder({ ...order, lastname: e.target.value })} />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Email' value={order.email} onChange={(e) => setOrder({ ...order, email: e.target.value })} />
          <input type="text" placeholder='Street' value={order.street} onChange={(e) => setOrder({ ...order, street: e.target.value })} />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='City' value={order.city} onChange={(e) => setOrder({ ...order, city: e.target.value })} />
          <input type="text" placeholder='State' value={order.state} onChange={(e) => setOrder({ ...order, state: e.target.value })} />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' value={order.zipcode} onChange={(e) => setOrder({ ...order, zipcode: e.target.value })} />
          <input type="text" placeholder='Country' value={order.country} onChange={(e) => setOrder({ ...order, country: e.target.value })} />
        </div>
        <input type="text" placeholder='Phone Number' value={order.phonenumber} onChange={(e) => setOrder({ ...order, phonenumber: e.target.value })} />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${20}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery fee</p>
            <p>${20}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total</p>
            <p>${20}</p>
          </div>
        </div>
        <button>Payment</button>
      </div>
    </form>
  );
};