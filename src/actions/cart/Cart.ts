import { action } from "typesafe-actions";

export enum actionTypesCartCount {
  INC_CART_COUNT = "INC_CART_COUNT",
  DEC_CART_COUNT = "DEC_CART_COUNT",
}

export const cartActions = {
  incCartCount: (count: number) =>
    action(actionTypesCartCount.INC_CART_COUNT, count),
  decCartCount: (count: number) =>
    action(actionTypesCartCount.DEC_CART_COUNT, count),
};
