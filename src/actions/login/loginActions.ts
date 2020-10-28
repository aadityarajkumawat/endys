import { actionTypesLogin } from "./Login";
import { Dispatch } from "redux";
import * as MyTypes from "MyTypes";

export const mountPopup = () => (dispatch: Dispatch<MyTypes.RootAction>) => {
  dispatch({ type: actionTypesLogin.MOUNT_POPUP });
};

export const unmountPopup = () => (dispatch: Dispatch<MyTypes.RootAction>) => {
  dispatch({ type: actionTypesLogin.UNMOUNT_POPUP });
};
