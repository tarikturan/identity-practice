import * as actionTypes from "../actions/poldy_actions/actionTypes";

const INITIAL_STATE = {
  companies: [],
};

export const poldyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER_SUCCESS:
      return state;
    case actionTypes.ADD_COMPANY_SUCCESS:
      return state;
    case actionTypes.ADD_POLDY_COMPANY_SUCCESS:
      return state;
    case actionTypes.GET_LIST_COMPANY:
      return {
        ...state,
        companies: action.payload,
      };
    case actionTypes.UPDATE_COMPANY_SUCCESS:
      return state;
    default:
      return state;
  }
};
