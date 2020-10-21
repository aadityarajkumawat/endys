import React from "react";

interface Props {}

export const Counter: React.FC<Props> = () => {
  return (
    <div className="counter">
      <div className="number">56</div>
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
