import React from "react";
import Home from "../pages/home/Home";
import MenuContainer from "../pages/menu/MenuContainer";
import { Route } from "react-router-dom";

interface Props {}

export const Routes: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/menu" component={MenuContainer} />
    </React.Fragment>
  );
};
