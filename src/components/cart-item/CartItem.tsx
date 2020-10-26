import React, { useState } from "react";
import { Counter } from "../counter/Counter";
import { firestore } from "../../firebase/config";
import styled from "styled-components";

interface Props {
  name: string;
  quantity: number;
  price: string;
  index: number;
}

export const CartItem: React.FC<Props> = ({ name, quantity, price, index }) => {
  const [event, setEvent] = useState<boolean>(false);

  const deleteItem = (id: string) => {
    // firebase code
    firestore
      .collection("cart")
      .doc(id)
      .delete()
      .then(() => {
        setEvent(false);
      })
      .catch((err) => {
        console.error("errorrr", err);
      });
  };
  const removeItem = () => {
    // Checking if it already exist
    setEvent(true);
    firestore
      .collection("cart")
      .where("name", "==", name)
      .get()
      .then((snaps) => {
        snaps.forEach((snap) => {
          deleteItem(snap.id);
        });
      })
      .catch(() => {
        console.log("Now i got the err");
      });
  }; 

  return (
    <div className="cart-item">
      <div className="top">
        <div>{index + 1}</div>
        <div>{name}</div>
        <div>{quantity}</div>
        <div>{price} INR</div>
      </div>
      <div className="bottom">
        <Counter quantity={quantity} name={name} price={price} />
        <div className="remove">
          <RemoveButton onClick={removeItem} disabled={event}>
            Remove
          </RemoveButton>
        </div>
      </div>
    </div>
  );
};

const RemoveButton = styled.button`
  background-color: ${({ disabled }) => (disabled ? "#69030348" : "#690303")};
`;
