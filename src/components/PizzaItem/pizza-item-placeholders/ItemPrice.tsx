import React from "react";
import styled from "styled-components";

interface Props {}

const ItemPrice: React.FC<Props> = () => {
  return (
    <ItemPriceContainer>
      <MovingWave></MovingWave>
    </ItemPriceContainer>
  );
};

const ItemPriceContainer = styled.div`
  width: 100px;
  height: 22px;
  background-color: #525252;
  margin-top: 5px;
  position: relative;
  overflow-x: hidden;
`;

const MovingWave = styled.div`
  width: 100px;
  height: 22px;
  background: linear-gradient(90deg, #525252 0%, #a4a4a4 50%, #525252 100%);
  position: absolute;
  animation: moveRight 1s infinite ease;

  @keyframes moveRight {
    0% {
      left: 0;
    }
    99% {
      left: 100%;
    }
    100% {
      left: 0;
    }
  }
`;

export default ItemPrice;
