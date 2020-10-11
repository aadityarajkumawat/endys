import styled from "styled-components";

type Ul = {
  isVisible: string;
  typeP: boolean;
};

export const ListContainer = styled.ul<Ul>`
  display: ${({ isVisible }) =>
    isVisible === "none" ? "flex" : "none"} !important;
  position: ${({ typeP }) => (typeP ? "absolute" : "static")};z
  left: 0;
  right: 0;
  justify-content: center;
  background-color: #222222;
  opacity: 0.99;
  width: 100%;
  top: 80px;
  align-items: center;
  border-top: ${({ typeP }) => (typeP ? "1px solid #e5e5e5" : "0px solid")};
  flex-direction: ${({ typeP }) => (typeP ? "column" : "row")};

  & > li {
    margin: ${({ typeP }) => (typeP ? "15px 0" : "initial")};
  }
`;
