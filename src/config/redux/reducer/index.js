import { combineReducers } from "redux";
import homeReducer from "./red_home";
import loginReducer from "./red_login";
import userReducer from "./user";
import orderReducer from "./order";

const rootReducer = combineReducers({
  homePage: homeReducer,
  loginPage: loginReducer,
  user: userReducer,
  order: orderReducer,
});

export default rootReducer;
