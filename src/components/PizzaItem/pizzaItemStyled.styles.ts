import styled from "styled-components";

export const PizzaI = styled.div`
  width: 250px;
  height: 300px;
  border-radius: 12px;
  background-color: #171717;
  margin: 0 20px;
  margin-top: 80px;
  text-align: center;
  transition: all 0.5s ease;
  box-shadow: 4px 4px 4px 0px #e2e2e205, -4px 0px 4px 0px #e2e2e205;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 700px) {
    width: 210px;
    height: 280px;
    margin: 0 10px;
    margin-top: 50px;
  }
`;

export const PName = styled.div`
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: white;

  @media screen and (max-width: 700px) {
    font-size: 16px;
  }
`;

export const PPrice = styled.div`
  color: #bcbcbc;
  width: 100%;
  text-align: center;
  margin: 5px 0;
`;

export const AddToCart = styled.button`
  width: 120px;
  height: 30px;
  border: none;
  border-radius: 8px;
  color: #fff;
  margin-top: 8px;
  cursor: pointer;
  background-color: ${({ disabled }) =>
    disabled ? "rgba(71, 101, 57, 0.5)" : "#476539"};
`;
