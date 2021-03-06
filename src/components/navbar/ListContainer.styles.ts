import styled from "styled-components";

type Ul = {
  isVisible: string;
  typeP: boolean;
};



export const ListContainer = styled.ul<Ul>`
  display: ${({ isVisible }) =>
    isVisible === "none" ? "flex" : "none"} !important;
  position: ${({ typeP }) => (typeP ? "absolute" : "static")};
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

  animation: ${({ typeP }) => (typeP ? "DropIn 0.5s ease" : "none")};

  @keyframes DropIn {
    0% {
      opacity: 0;
      top: 70px;
      height: 60px;
    }
    90% {
      opacity: 1;
      top: 80px;
      height: 220px;
    }
    100% {
      height: 210px;
    }
  }

  & > li {
    margin: ${({ typeP }) => (typeP ? "15px 0" : "initial")};

    & > a {
      margin-right: 0px !important;
    }
  }
`;