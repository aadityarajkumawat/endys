import * as MyTypes from "MyTypes";
import { actionTypesUser } from "../actions/user/User";
import { FormI } from "../components/login/LoginPopup";

const init: FormI = {
  name: "",
  phone: "",
  password: "",
};

export const UserReducer = (
  state: FormI = init,
  action: MyTypes.RootAction
): FormI => {
  switch (action.type) {
    case actionTypesUser.EMIT_USER:
      return { ...action.payload };

    default:
      return state;
  }
};
