import React from "react";
import { CartItem } from "../../components/cart-item/CartItem";

interface Props {}

const Cart: React.FC<Props> = () => {
  return (
    <div className="cart-container">
      <div className="cart-it">
        <div className="top-section">
          <h1>Items in Cart</h1>
          <button>Checkout</button>
        </div>
        <div className="fields">
          <ul>
            <li>S.No.</li>
            <li>Name</li>
            <li>Quantity</li>
            <li>Price</li>
          </ul>
        </div>
        <div className="cart-items">
        </div>
      </div>
    </div>
  );
};

export default Cart;
