import axios from "axios";
import { loginUrl } from "../apiUrl";
import jwt_decode from "jwt-decode";
import * as actionTypes from "./actionTypes";

export const loginUser = (userData,history) => (dispatch) => {
  axios
    .post(loginUrl, userData)
    .then((response) => {
      const token = response.data.token;
      localStorage.setItem("jwtToken", token);
      const decoded = jwt_decode(response.data.token);
      console.log(decoded.position);
      dispatch({ type: actionTypes.LOGIN_USER_SUCCESS, payload: {UserName: decoded.UserName, position: decoded.position} });
      //history.push("/dashboard");
    })
    .catch((error) => alert(error));
};
