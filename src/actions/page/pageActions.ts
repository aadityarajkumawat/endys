import { Dispatch } from "redux";
import { actionTypesCart } from "./Page";
import * as MyTypes from "MyTypes";

export const showCart = () => (dispatch: Dispatch<MyTypes.RootAction>) => {
  dispatch({ type: actionTypesCart.SHOW_CART });
};
