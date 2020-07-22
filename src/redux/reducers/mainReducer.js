import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { companyReducer } from "./companyReducer";
import { poldyReducer } from "./poldyReducer";
import { userReducer } from "./userReducer";

export const reducer = combineReducers({
  authReducer,
  companyReducer,
  poldyReducer,
  userReducer,
});
