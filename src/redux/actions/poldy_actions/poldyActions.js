import axios from "axios";
import * as actionTypes from "./actionTypes";
import {
  addUserUrl,
  poldyCompanyAddUrl,
  companyAddUrl,
  getListCompanyUrl,
  updateCompanyUrl,
  deleteCompanyUrl,
} from "../apiUrl";

export const addUser = (userData, position) => (dispatch) => {
  if (userData.password !== userData.passwordAgain) {
    return alert("Şifreler eşleşmiyor");
  }
  axios
    .post(addUserUrl + position, userData)
    .then((response) => {
      alert("Kullanıcı başarıyle eklendi");
      dispatch({ type: actionTypes.ADD_USER_SUCCESS });
    })
    .catch((error) => alert("Birşeyler ters gitti!"));
};

export const addPoldyCompany = (companyData) => (dispatch) => {
  debugger;
  axios
    .post(poldyCompanyAddUrl, companyData)
    .then((response) => {
      alert("Şirket başarıyla eklendi");
      dispatch({ type: actionTypes.ADD_POLDY_COMPANY_SUCCESS });
    })
    .catch((error) => alert("Birşeyler ters gitti!"));
};

export const addCompany = (companyData) => (dispatch) => {
  axios
    .post(companyAddUrl, companyData)
    .then((response) => {
      alert("Şirket başarıyla eklendi");
      dispatch({ type: actionTypes.ADD_COMPANY_SUCCESS });
    })
    .catch((error) => console.log(error));
};

export const getListCompany = () => (dispatch) => {
  axios
    .get(getListCompanyUrl)
    .then((response) => {
      dispatch({ type: actionTypes.GET_LIST_COMPANY, payload: response.data });
    })
    .catch((error) => console.log(error));
};

export const updateCompany = (companyData) => (dispatch) => {
  axios
    .post(updateCompanyUrl, companyData)
    .then((response) => {
      dispatch({ type: actionTypes.UPDATE_COMPANY_SUCCESS });
    })
    .catch((error) => console.log(error));
};

export const deleteCompany = (companyData) => (dispatch) => {
  debugger;
  axios
    .post(deleteCompanyUrl, companyData)
    .then((response) => {
      console.log(response);
      dispatch({type: actionTypes.DELETE_COMPANY_SUCCESS})
    })
    .catch((error) => console.log(error));
};
