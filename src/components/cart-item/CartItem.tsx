import React, { useState } from "react";
import { CartBottom } from "./cart-components/CartBottom";
import { CartTop } from "./cart-components/CartTop";

interface Props {
  name: string;
  quantity: number;
  price: string;
  index: number;
}

export const CartItem: React.FC<Props> = ({ name, quantity, price, index }) => {
  const [event, setEvent] = useState<boolean>(false);
  return (
    <div className="cart-item">
      <CartTop index={index} name={name} quantity={quantity} price={price} />
      <CartBottom
        event={event}
        name={name}
        price={price}
        quantity={quantity}
        setEvent={setEvent}
      />
    </div>
  );
};
