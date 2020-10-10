import React from "react";

interface Props {}

export const Home: React.FC<Props> = ({}) => {
  const log = () => {
    console.log("clicked");
  };
  return (
    <div className="home flex justify-c align-c flex-dir-col">
      <div className="landing flex justify-c align-c flex-dir-col">
        <div className="cap">Yummy pizzas delivered fast and fresh</div>
        <button className="order-now-btn" onClick={log}>
          Order Now
        </button>
      </div>
    </div>
  );
};
