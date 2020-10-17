import * as MyTypes from "MyTypes";
import { actionTypesCart } from "../actions/page/Page";

export interface CartShownStatus {
  cartShown: boolean;
}

const init: CartShownStatus = {
  cartShown: false,
};

export const PageReducer = (
  state: CartShownStatus = init,
  action: MyTypes.RootAction
): CartShownStatus => {
  switch (action.type) {
    case actionTypesCart.SHOW_CART:
      return { cartShown: true };
    case actionTypesCart.REMOVE_CART:
      return { cartShown: false };
    default:
      return state;
  }
};
