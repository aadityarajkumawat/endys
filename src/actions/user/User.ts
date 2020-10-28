import { action } from "typesafe-actions";
import { FormI } from "../../components/login/LoginPopup";

export enum actionTypesUser {
  EMIT_USER = "EMIT_USER",
}

export const userActions = {
  emitUser: (user: FormI) => action(actionTypesUser.EMIT_USER, user),
};
