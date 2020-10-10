import * as MyTypes from "MyTypes";
import { actionTypes } from "../actions/menu/Menu";

export interface MenuState {
  status: string;
}

const init: MenuState = {
  status: "none",
};

export const MenuReducer = (
  state: MenuState = init,
  action: MyTypes.RootAction
): MenuState => {
  switch (action.type) {
    case actionTypes.OPEN_MENU:
      return { status: "flex" };
    case actionTypes.CLOSE_MENU:
      return { status: "none" };
    default:
      return state;
  }
};
