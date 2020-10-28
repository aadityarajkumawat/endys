import React from "react";
import { Counter } from "../../counter/Counter";
import styled from "styled-components";
import removeItem from "../../../firebase/removeCartItem";

interface Props {
  quantity: number;
  name: string;
  price: string;
  setEvent: React.Dispatch<React.SetStateAction<boolean>>;
  event: boolean;
}

export const CartBottom: React.FC<Props> = ({
  quantity,
  name,
  price,
  setEvent,
  event,
}) => {
  return (
    <div className="bottom">
      <Counter quantity={quantity} name={name} price={price} />
      <div className="remove">
        <RemoveButton
          onClick={() => removeItem(name, setEvent)}
          disabled={event}
        >
          Remove
        </RemoveButton>
      </div>
    </div>
  );
};

const RemoveButton = styled.button`
  background-color: ${({ disabled }) => (disabled ? "#69030348" : "#690303")};
`;
