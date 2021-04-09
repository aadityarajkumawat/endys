import React from "react";
import Home from "../pages/home/Home";
import MenuContainer from "../pages/menu/MenuContainer";
import { Route } from "react-router-dom";
import Cart from "../pages/cart/Cart";
import { Checkout } from "../pages/checkout/Checkout";

interface Props {}

export const Routes: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/menu" component={MenuContainer} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/checkout" component={Checkout} />
    </React.Fragment>
  );
};
