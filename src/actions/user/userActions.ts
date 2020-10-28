import { actionTypesUser } from "./User";
import { Dispatch } from "redux";
import * as MyTypes from "MyTypes";
import { FormI } from "../../components/login/LoginPopup";

export const emitUser = (user: FormI) => (
  dispatch: Dispatch<MyTypes.RootAction>
) => {
  dispatch({ type: actionTypesUser.EMIT_USER, payload: user });
};
