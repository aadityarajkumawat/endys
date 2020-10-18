import React, { useEffect } from "react";
import styled from "styled-components";
import PImg from "../../img/pl-img.png";
import { incCartCount } from "../../actions/cart/cartActions";
import { switchCartRipple } from "../../actions/cart/cartActions";
import * as MyTypes from "MyTypes";
import { connect } from "react-redux";
import { Cart } from "../../reducers/Cart";

interface Props {
  incCartCount: (count: number) => void;
  switchCartRipple: (s: boolean) => void;
  cart: Cart;
}

const PizzaItem: React.FC<Props> = ({
  incCartCount,
  switchCartRipple,
  cart,
}) => {
  const combinedFunction = (cartCount: number, cartRipple: boolean) => {
    incCartCount(cartCount);
    switchCartRipple(cartRipple);
    setTimeout(() => {
      switchCartRipple(false);
    }, 500);
  };

  return (
    <PizzaI>
      <img src={PImg} className="p-img"></img>
      <PName>Farm House</PName>
      <PPrice>289 INR</PPrice>
      <AddToCart onClick={() => combinedFunction(cart.cartCount, true)}>
        Add to cart
      </AddToCart>
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

const mapStateToProps = (store: MyTypes.ReducerState) => {
  return {
    cart: store.cart,
  };
};

export default connect(mapStateToProps, { incCartCount, switchCartRipple })(
  PizzaItem
);
