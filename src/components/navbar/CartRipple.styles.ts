import styled from "styled-components";

type Ripple = {
    respondInc: boolean;
};

export const CartRipple = styled.span<Ripple>`
  &::after {
    animation: ${({respondInc}) => (respondInc ? 'RippleI 0.5s ease' : 'none')};

    @keyframes RippleI {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      100% {
        transform: scale(1.8);
        opacity: 0;
      }
    }
  }
`;
