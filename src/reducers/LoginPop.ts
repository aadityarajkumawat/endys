import * as MyTypes from "MyTypes";
import { actionTypesLogin } from "../actions/login/Login";

export interface Login {
  mounted: boolean;
}

const init: Login = {
  mounted: false,
};

export const LoginReducer = (
  state: Login = init,
  action: MyTypes.RootAction
): Login => {
  switch (action.type) {
    case actionTypesLogin.MOUNT_POPUP:
      return { ...state, mounted: true };
    case actionTypesLogin.UNMOUNT_POPUP:
      return { ...state, mounted: false };
    default:
      return state;
  }
};
