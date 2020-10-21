import React from "react";
import { Counter } from "../counter/Counter";

interface Props {}

export const CartItem: React.FC<Props> = () => {
  return (
    <div className="cart-item">
      <div className="top">
        <div>1</div>
        <div>Farm House</div>
        <div>2</div>
        <div>289 INR</div>
      </div>
      <div className="bottom">
        <Counter />
        <div className="remove">
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
};
