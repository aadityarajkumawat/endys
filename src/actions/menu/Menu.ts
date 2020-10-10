import { action } from "typesafe-actions";

export enum actionTypes {
  OPEN_MENU = "OPEN_MENU",
  CLOSE_MENU = "CLOSE_MENU",
}

export const menuActions = {
  open: () => action(actionTypes.OPEN_MENU),
  close: () => action(actionTypes.CLOSE_MENU),
};
