import * as actionTypes from "../actions/company_actions/actionTypes"

const INITIAL_STATE = {
  userData : null
};

export const companyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_SUCCESS:
      return {...state, userData: action.payload}
    default:
      return state;
  }
};
