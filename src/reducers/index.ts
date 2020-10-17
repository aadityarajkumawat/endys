import { combineReducers } from "redux";
import { MenuReducer } from "./Menu";
import { PageReducer } from "./Page";
import { CartReducer } from "./Cart";

const rootReducer = combineReducers({
  menu: MenuReducer,
  page: PageReducer,
  cart: CartReducer,
});

export default rootReducer;
