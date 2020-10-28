import React from "react";
import { CartItem } from "../../../components/cart-item/CartItem";
import { PizzaII } from "../Cart";
import { FormI } from "../../../components/login/LoginPopup";

interface Props {
  cartItems: Array<PizzaII>;
  user: FormI;
}

export const CartItems: React.FC<Props> = ({ cartItems, user }) => {
  return (
    <div className="cart-items">
      {cartItems.map((items, ind) => (
        <CartItem
          index={ind}
          name={items.name}
          quantity={items.quantity}
          price={items.price}
          key={items.id}
          user={user}
        />
      ))}
    </div>
  );
};

export default CartItems;
