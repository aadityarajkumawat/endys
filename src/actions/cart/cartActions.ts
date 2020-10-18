import { actionTypesCartCount } from "./Cart";
import { actionTypesRipple } from "./Cart";
import { Dispatch } from "redux";
import * as MyTypes from "MyTypes";

export const incCartCount = (count: number) => (
  dispatch: Dispatch<MyTypes.RootAction>
) => {
  dispatch({ type: actionTypesCartCount.INC_CART_COUNT, payload: count });
};

export const decCartCount = (count: number) => (
  dispatch: Dispatch<MyTypes.RootAction>
) => {
  dispatch({ type: actionTypesCartCount.INC_CART_COUNT, payload: count });
};

export const switchCartRipple = (s: boolean) => (
  dispatch: Dispatch<MyTypes.RootAction>
) => {
  dispatch({
    type: s ? actionTypesRipple.RIPPLE_ON : actionTypesRipple.RIPPLE_OFF,
    payload: s,
  });
};
