import React from "react";
import styled from "styled-components";

interface Props {}

const ItemImage: React.FC<Props> = () => {
  return (
    <ItemImageContainer>
      <MovingWave></MovingWave>
    </ItemImageContainer>
  );
};

const ItemImageContainer = styled.div`
  width: 170px;
  height: 170px;
  background-color: #525252;
  position: relative;
  overflow-x: hidden;
  margin-top: 15px;
`;

const MovingWave = styled.div`
  width: 170px;
  height: 100%;
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

export default ItemImage;
