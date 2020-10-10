import { combineReducers } from "redux";
import { MenuReducer } from "./Menu";

const rootReducer = combineReducers({
  menu: MenuReducer,
});

export default rootReducer;
