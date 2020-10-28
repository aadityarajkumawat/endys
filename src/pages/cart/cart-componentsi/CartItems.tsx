import React from "react";
import { CartItem } from "../../../components/cart-item/CartItem";
import { PizzaII } from "../Cart";

interface Props {
  cartItems: Array<PizzaII>;
}

export const CartItems: React.FC<Props> = ({ cartItems }) => {
  return (
    <div className="cart-items">
      {cartItems.map((items, ind) => (
        <CartItem
          index={ind}
          name={items.name}
          quantity={items.quantity}
          price={items.price}
          key={items.id}
        />
      ))}
    </div>
  );
};
