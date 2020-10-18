import * as MyTypes from "MyTypes";
import { actionTypesCartCount } from "../actions/cart/Cart";
import { actionTypesRipple } from "../actions/cart/Cart";

export interface Cart {
  cartCount: number;
  rippleS: boolean;
}

const init: Cart = {
  cartCount: 0,
  rippleS: false,
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
    case actionTypesRipple.RIPPLE_ON:
    case actionTypesRipple.RIPPLE_OFF:
      return { ...state, rippleS: action.payload };
    default:
      return state;
  }
};
