import { combineReducers } from "redux";
import { MenuReducer } from "./Menu";
import { PageReducer } from "./Page";
import { CartReducer } from "./Cart";
import { LoginReducer } from "./LoginPop";
import { UserReducer } from "./User";

const rootReducer = combineReducers({
  menu: MenuReducer,
  page: PageReducer,
  cart: CartReducer,
  login: LoginReducer,
  user: UserReducer,
});

export default rootReducer;
