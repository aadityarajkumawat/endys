import styled from "styled-components";

type Ul = {
  isVisible: string;
  type: boolean;
};

export const ListContainer = styled.ul<Ul>`
  display: ${({ isVisible }) =>
    isVisible === "none" ? "flex" : "none"} !important;
  position: ${({ type }) => (type ? "absolute" : "static")};
  left: 0;
  right: 0;
  justify-content: center;
  background-color: #222222;
  opacity: 0.99;

  top: 80px;
  align-items: center;
  border-top: ${({ type }) => (type ? "1px solid #e5e5e5" : "0px solid")};
  flex-direction: ${({ type }) => (type ? "column" : "row")};

  & > li {
    margin: ${({ type }) => (type ? "15px 0" : "initial")};
  }
`;
