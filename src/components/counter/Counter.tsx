import React, { useState } from "react";
import { DownCounterButton, UpCounterButton } from "./CounterButton.styles";
import changePizzaCount from "../../firebase/changePizzaCount";

interface Props {
  quantity: number;
  name: string;
  price: string;
  collectionName: string;
}

const Counter: React.FC<Props> = ({
  quantity,
  name,
  price,
  collectionName,
}) => {
  const [event, setEvent] = useState<boolean>(false);

  return (
    <div className="counter">
      <div className="number">{quantity}</div>
      <div className="tuner">
        <UpCounterButton
          className="up-con"
          onClick={() =>
            !event
              ? changePizzaCount(
                  true,
                  setEvent,
                  price,
                  quantity,
                  name,
                  collectionName
                )
              : null
          }
          eve={event}
        >
          <span className="top-f-up"></span>
          <span className="bot-f-up"></span>
        </UpCounterButton>
        <DownCounterButton
          className="down-con"
          onClick={() =>
            !event
              ? changePizzaCount(
                  false,
                  setEvent,
                  price,
                  quantity,
                  name,
                  collectionName
                )
              : null
          }
          eve={event}
        >
          <span className="top-f"></span>
          <span className="bot-f"></span>
        </DownCounterButton>
      </div>
    </div>
  );
};

export default Counter;
