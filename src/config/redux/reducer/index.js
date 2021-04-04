import { combineReducers } from "redux";
import homeReducer from "./red_home";
import loginReducer from "./red_login";

const rootReducer = combineReducers({
  homePage: homeReducer,
  loginPage: loginReducer,
});

export default rootReducer;
