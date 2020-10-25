import React from "react";
import { Counter } from "../counter/Counter";
import { firestore } from "../../firebase/config";

interface Props {
  name: string;
  quantity: number;
  price: string;
}

export const CartItem: React.FC<Props> = ({ name, quantity, price }) => {
  const removeItem = () => {
    // Checking if it already exist
    firestore
      .collection("cart")
      .where("name", "==", name)
      .get()
      .then((snaps) => {
        snaps.forEach((snap) => {
          // firebase code
          firestore
            .collection("cart")
            .doc(snap.id)
            .delete()
            .then(() => {
              console.log("Document deleted", snap.id);
            })
            .catch((err) => {
              console.error("errorrr", err);
            });
        });
      })
      .catch(() => {
        console.log("Now i got the err");
      });
  };

  return (
    <div className="cart-item">
      <div className="top">
        <div>1</div>
        <div>{name}</div>
        <div>{quantity}</div>
        <div>{price} INR</div>
      </div>
      <div className="bottom">
        <Counter quantity={quantity} name={name} price={price} />
        <div className="remove">
          <button onClick={removeItem}>Remove</button>
        </div>
      </div>
    </div>
  );
};
