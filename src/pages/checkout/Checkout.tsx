import React from "react";
import { Flex } from "../../components/flex/Flex";

interface CheckoutProps {}

export const Checkout: React.FC<CheckoutProps> = () => {
  return (
    <div className="chk-container">
      <div className="chk-left">
        <Flex>
          <div className="chk-pay-container"></div>
          <div className="chk-pay-container"></div>
        </Flex>
        <Flex classname="under">Under development</Flex>
      </div>
      <div className="chk-right"></div>
    </div>
  );
};
