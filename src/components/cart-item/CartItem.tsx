import React from "react";
import { Counter } from "../counter/Counter";

interface Props {
  name: string;
  quantity: string;
  price: string;
}

export const CartItem: React.FC<Props> = ({ name, quantity, price }) => {
  return (
    <div className="cart-item">
      <div className="top">
        <div>1</div>
        <div>{name}</div>
        <div>{quantity}</div>
        <div>{price} INR</div>
      </div>
      <div className="bottom">
        <Counter quantity={quantity} />
        <div className="remove">
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
};
