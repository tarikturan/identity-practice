import axios from "axios";
import { getUserUrl } from "../apiUrl";
import * as actionTypes from "./actionTypes";

export const getUser = (userName) => (dispatch) => {
  axios
    .get(getUserUrl + userName)
    .then((response) => {
      dispatch({ type: actionTypes.GET_USER_SUCCESS, payload: response });
    })

    .catch((error) => alert("Birşeyler ters gitti!"));
};
