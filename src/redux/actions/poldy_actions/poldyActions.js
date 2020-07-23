import axios from "axios";
import * as actionTypes from "./actionTypes"
import { addUserUrl } from "../apiUrl";

export const addUser = (userData, position) => (dispatch) => {
  if (userData.password !== userData.passwordAgain) {
    return alert("Şifreler eşleşmiyor");
  }
  axios
    .post(addUserUrl + position, userData)
    .then((response) => {
      alert("Kullanıcı başarıyle eklendi");
      dispatch({type: actionTypes.ADD_USER_SUCCESS});
    })
    .catch((error) => alert("Birşeyler ters gitti!"));
};
