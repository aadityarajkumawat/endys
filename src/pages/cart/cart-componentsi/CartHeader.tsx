import React from "react";
import CartTotal from "../../../components/cart-total/CartTotal";

interface Props {
  collectionName: string;
}

export const CartHeader: React.FC<Props> = ({ collectionName }) => {
  return (
    <div className="top-section">
      <h1>Items in Cart</h1>
      <div className="wrap-billing flex align-c">
        <CartTotal collectionName={collectionName} />
        <button>Checkout</button>
      </div>
    </div>
  );
};
