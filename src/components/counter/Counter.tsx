import React from "react";
import { firestore } from "../../firebase/config";

interface Props {
  quantity: string;
  name: string;
  price: string;
}

export const Counter: React.FC<Props> = ({ quantity, name, price }) => {
  const changePizzaCount = (boo: boolean) => {
    firestore
      .collection("cart")
      .where("name", "==", name)
      .get()
      .then((snaps) => {
        snaps.forEach((snap) => {
          firestore
            .collection("cart")
            .doc(snap.id)
            .set({
              name: name,
              price: price,
              quantity: boo
                ? (Number(quantity) + 1).toString()
                : (Number(quantity) - 1).toString(),
            });
        });
      });
  };

  return (
    <div className="counter">
      <div className="number">{quantity}</div>
      <div className="tuner">
        <div className="up-con" onClick={() => changePizzaCount(true)}>
          <span className="top-f-up"></span>
          <span className="bot-f-up"></span>
        </div>
        <div className="down-con" onClick={() => changePizzaCount(false)}>
          <span className="top-f"></span>
          <span className="bot-f"></span>
        </div>
      </div>
    </div>
  );
};
