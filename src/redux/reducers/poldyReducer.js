import * as actionTypes from "../actions/poldy_actions/actionTypes";

const INITIAL_STATE = {};
export const poldyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER_SUCCESS:
      return state;
    default:
      return state;
  }
};
