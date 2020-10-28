import React, { useState } from "react";
import { CartBottom } from "./cart-components/CartBottom";
import { CartTop } from "./cart-components/CartTop";
import { FormI } from "../login/LoginPopup";

interface Props {
  name: string;
  quantity: number;
  price: string;
  index: number;
  user: FormI;
}

export const CartItem: React.FC<Props> = ({
  name,
  quantity,
  price,
  index,
  user,
}) => {
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
        collectionName={user.phone}
      />
    </div>
  );
};
