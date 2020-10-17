import React from "react";
import styled from "styled-components";
import PImg from "../../img/pl-img.png";
import { incCartCount } from "../../actions/cart/cartActions";
import { connect } from "react-redux";

interface Props {
  incCartCount: () => object;
}

const PizzaItem: React.FC<Props> = ({ incCartCount }) => {
  return (
    <PizzaI>
      <img src={PImg} className="p-img"></img>
      <PName>Farm House</PName>
      <PPrice>289 INR</PPrice>
      <AddToCart onClick={() => incCartCount()}>Add to cart</AddToCart>
    </PizzaI>
  );
};

const PizzaI = styled.div`
  width: 200px;
  height: 280px;
  border-radius: 12px;
  background-color: #171717;
  margin: 0 20px;
  margin-top: 80px;
  text-align: center;
  box-shadow: 4px 4px 4px 0px #e2e2e205, -4px 0px 4px 0px #e2e2e205;
`;

const PName = styled.div`
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const PPrice = styled.div`
  color: #bcbcbc;
  width: 100%;
  text-align: center;
  margin: 5px 0;
`;

const AddToCart = styled.button`
  width: 120px;
  height: 30px;
  border: none;
  border-radius: 8px;
  background-color: #476539;
  color: #fff;
  margin-top: 8px;
  cursor: pointer;
`;

export default connect(null, { incCartCount })(PizzaItem);
