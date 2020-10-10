import styled from "styled-components";

type Ul = {
  isVisible: string;
};

export const ListContainer = styled.ul<Ul>`
  display: ${({ isVisible }) => (isVisible === "none" ? "flex" : "none")};
`;
