import React, { useState } from "react";
import { firestore } from "../../firebase/config";
import { DownCounterButton, UpCounterButton } from "./CounterButton.styles";

interface Props {
  quantity: number;
  name: string;
  price: string;
}

export const Counter: React.FC<Props> = ({ quantity, name, price }) => {
  const [event, setEvent] = useState<boolean>(false);
  const getUpdatedQuantity = (b: boolean, q: number): number => {
    if (b) {
      return q + 1;
    } else {
      if (q > 1) {
        return q - 1;
      } else {
        return 0;
      }
    }
  };
  const changePizzaCount = (boo: boolean) => {
    setEvent(true);
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
              quantity: getUpdatedQuantity(boo, quantity),
            });
          setEvent(false);
        });
      });
  };

  return (
    <div className="counter">
      <div className="number">{quantity}</div>
      <div className="tuner">
        <UpCounterButton
          className="up-con"
          onClick={() => (!event ? changePizzaCount(true) : null)}
          eve={event}
        >
          <span className="top-f-up"></span>
          <span className="bot-f-up"></span>
        </UpCounterButton>
        <DownCounterButton
          className="down-con"
          onClick={() => (!event ? changePizzaCount(false) : null)}
          eve={event}
        >
          <span className="top-f"></span>
          <span className="bot-f"></span>
        </DownCounterButton>
      </div>
    </div>
  );
};
