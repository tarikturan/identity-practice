import * as actionTypes from "../actions/auth_actions/actionTypes";

const INITIAL_STATE = {
  isAuthenticated: false,
  tokenData: null,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER_SUCCESS:
      return { ...state, isAuthenticated: true, tokenData: action.payload};
    default:
      return state;
  }
};
