import { action } from "typesafe-actions";

export enum actionTypesLogin {
  MOUNT_POPUP = "MOUNT_POPUP",
  UNMOUNT_POPUP = "UNMOUNT_POPUP",
}

export const loginActions = {
  mountPopup: () => action(actionTypesLogin.MOUNT_POPUP),
  unmountPopup: () => action(actionTypesLogin.UNMOUNT_POPUP),
};
