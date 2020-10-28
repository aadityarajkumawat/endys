import React, { useState, useEffect } from "react";
import { NavFields } from "../../components/fields/NavFields";
import getCartItems from "../../firebase/getCartItems";
import { CartHeader } from "./cart-componentsi/CartHeader";
import { CartItems } from "./cart-componentsi/CartItems";

interface Props {}

export interface PizzaII {
  name: string;
  quantity: number;
  price: string;
  id: string;
}

const Cart: React.FC<Props> = () => {
  const [cartItems, setCartItems] = useState<Array<PizzaII>>([]);

  useEffect(() => {
    getCartItems(setCartItems);
  }, []);

  return (
    <div className="cart-container">
      <div className="cart-it">
        <CartHeader />
        <NavFields />
        <CartItems cartItems={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
