import styled from "styled-components";

interface ItemContainerI {
  width: string;
  height: string;
  marginTop: string;
}

export const ItemContainer = styled.div<ItemContainerI>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: #525252;
  position: relative;
  overflow-x: hidden;
  margin-top: ${({ marginTop }) => marginTop};
`;

export const MovingWave = styled.div`
  width: 100%;
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
