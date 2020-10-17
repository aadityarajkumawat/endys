import { actionTypesCartCount } from "./Cart";
import { Dispatch } from "redux";
import * as MyTypes from "MyTypes";

export const incCartCount = (count: number) => (
  dispatch: Dispatch<MyTypes.RootAction>
) => {
  dispatch({ type: actionTypesCartCount.INC_CART_COUNT, payload: count });
};
