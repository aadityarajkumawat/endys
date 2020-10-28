import React from "react";

interface Props {
  index: number;
  name: string;
  quantity: number;
  price: string;
}

export const CartTop: React.FC<Props> = ({index, name, quantity, price}) => {
  return (
    <div className="top">
      <div>{index + 1}</div>
      <div>{name}</div>
      <div>{quantity}</div>
      <div>
        <div>{Number(price) * quantity} INR</div>
        <div className="pricexquan">({`${price} x ${quantity}`})</div>
      </div>
    </div>
  );
};
