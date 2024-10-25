import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./icecream/icecreamReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer,
  user: userReducer,
});

export default rootReducer;
