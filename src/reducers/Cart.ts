import * as MyTypes from "MyTypes";
import { actionTypesCartCount } from "../actions/cart/Cart";

export interface Cart {
  cartCount: number;
}

const init: Cart = {
  cartCount: 0,
};

export const CartReducer = (
  state: Cart = init,
  action: MyTypes.RootAction
): Cart => {
  switch (action.type) {
    case actionTypesCartCount.INC_CART_COUNT:
      return { ...state, cartCount: action.payload + 1 };
    case actionTypesCartCount.DEC_CART_COUNT:
      return { ...state, cartCount: action.payload - 1 };
    default:
      return state;
  }
};
