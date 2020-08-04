import React from "react";
import AddUser from "../components/AddUser";
//import AddCompany from "../components/AddCompany";
import CompanyList from "../components/CompanyList";

const CompanyDash = (props) => {
  return (
    <div>
      <CompanyList />
      <AddUser />
    </div>
  );
};

export default CompanyDash;
