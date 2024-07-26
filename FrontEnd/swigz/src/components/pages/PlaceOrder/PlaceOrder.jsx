import React from "react";
import './PlaceOrder.css';
export const PlaceOrder=()=>
{
    return (
        <form className="place-order">
            <div className="place-order-left">
                <h2 className="title">Delivery Information</h2>
                <div className="multi-fields">
                   <input type="text" placeholder='First Name'/>
                   <input type="text" placeholder='Last Name'/>
                </div>
                <div className="multi-fields">

                   <input type="text" placeholder='Email'/>
                   <input type="text" placeholder='Street'/>
                </div>
                <div className="multi-fields">
                   <input type="text" placeholder='City'/>
                   <input type="text" placeholder='State'/>
                </div>
                <div className="multi-fields">
                   <input type="text" placeholder='Zio code'/>
                   <input type="text" placeholder='Country '/>
                </div>
                   <input type="text" placeholder='PhoneNumber '/>

            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart totals</h2>
                    <div className="cart-total-details">
                        <p>subtotal</p>
                        <p>${20}</p>
                    </div>
                    <hr/>
                    <div className="cart-total-details">
                        <p>Delivery fee</p>
                        <p>${20}</p>
                    </div>
                    <hr/>
                    <div className="cart-total-details">
                        <p>Total</p>
                        <p>${20}</p>
                    </div>


                </div>
                <button>payment</button>
            </div>

        </form>
    )
}