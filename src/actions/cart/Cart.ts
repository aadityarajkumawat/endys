import { action } from "typesafe-actions";

export enum actionTypesCartCount {
  INC_CART_COUNT = "INC_CART_COUNT",
  DEC_CART_COUNT = "DEC_CART_COUNT",
}

export enum actionTypesRipple {
  RIPPLE_ON = "RIPPLE_ON",
  RIPPLE_OFF = "RIPPLE_OFF",
}

export const cartActions = {
  incCartCount: (count: number) =>
    action(actionTypesCartCount.INC_CART_COUNT, count),
  decCartCount: (count: number) =>
    action(actionTypesCartCount.DEC_CART_COUNT, count),
  switchCartRipple: (s: boolean) =>
    action(s ? actionTypesRipple.RIPPLE_ON : actionTypesRipple.RIPPLE_OFF, s),
};
