import React from "react";

interface Props {
  quantity: string;
}

export const Counter: React.FC<Props> = ({ quantity }) => {
  return (
    <div className="counter">
      <div className="number">{quantity}</div>
      <div className="tuner">
        <div className="up-con">
          <span className="top-f-up"></span>
          <span className="bot-f-up"></span>
        </div>
        <div className="down-con">
          <span className="top-f"></span>
          <span className="bot-f"></span>
        </div>
      </div>
    </div>
  );
};
