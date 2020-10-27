import React from "react";

interface Props {}

export const NavFields: React.FC<Props> = () => {
  return (
    <div className="fields">
      <ul>
        <li>S.No.</li>
        <li>Name</li>
        <li>Quantity</li>
        <li>Price</li>
      </ul>
    </div>
  );
};
