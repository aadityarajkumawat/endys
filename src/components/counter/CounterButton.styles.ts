import styled from "styled-components";

type CounterButton = {
  eve: boolean;
};

export const UpCounterButton = styled.div<CounterButton>`
  background-color: ${({ eve }) => (eve ? "#646464" : "#fff")};
`;

export const DownCounterButton = styled.div<CounterButton>`
  background-color: ${({ eve }) => (eve ? "#646464" : "#fff")};
`;
