import { action } from "typesafe-actions";

export enum actionTypesCart {
  SHOW_CART = "SHOW_CART",
  REMOVE_CART = "REMOVE_CART",
}

export const pageActions = {
  showCart: () => action(actionTypesCart.SHOW_CART),
  removeCart: () => action(actionTypesCart.REMOVE_CART),
};
