import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getListCompany,
  updateCompany,
  addCompany,
  addPoldyCompany,
  deleteCompany,
} from "../redux/actions/poldy_actions/poldyActions";
import {
  Table,
  ButtonToggle,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "../datagrid.css";

const CompanyList = (props) => {
  const [isDisabled, setDisabled] = useState(true);
  const [inputClass, setInputClass] = useState("gridInputBorderless");
  const [isVisible, setVisible] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [subCompanyId, setSubCompanyId] = useState(null);
  const [updatedCompanyId, setUpdatedCompId] = useState(null);
  const [updatedCompanyName, setUpdatedCompName] = useState(null);
  const [updatedSubCompanyId, setUpdatedSubCompId] = useState(null);

  const updatedComp = {
    companyId: parseInt(updatedCompanyId),
    subCompanyId: parseInt(updatedSubCompanyId),
    companyName: updatedCompanyName,
  };

  useEffect(() => {
    props.getListCompany();
  }, [props.companies]);

  const toggle = () => {
    props.getListCompany();
    setIsOpenModal(!isOpenModal);
  };
  const editClick = () => {
    setDisabled(false);
    setVisible(true);
    setInputClass("gridInputWithBorder");
  };

  const saveClick = (e) => {
    props.updateCompany(updatedComp);
    props.getListCompany();
    setInputClass("gridInputBorderless");
    setDisabled(true);
    setVisible(false);
  };

  const companyData = {
    companyName: companyName,
    subCompanyId: parseInt(subCompanyId),
  };

  const addCompanyClick = () => {
    props.addCompany(companyData);
    props.addPoldyCompany(companyData);
  };

  const companies = props.companies;

  const onChange = (e) => {
    var filtre = companies.filter((comp) => comp.companyName === e.target.name);
    setUpdatedCompId(filtre[0].companyId);
    setUpdatedSubCompId(filtre[0].subCompanyId);
    setUpdatedCompName(e.target.value);
  };

  const deleteEvent = (e) => {
    debugger;
    var filtre = companies.filter((comp) => comp.companyName === e.target.name);
    props.deleteCompany(filtre[0]);
    props.getListCompany();
  };

  const cancelClick = () => {
    setInputClass("gridInputBorderless");
    setDisabled(true);
    setVisible(false);
  };
  return (
    <div>
      <Table className="gridTable" striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Şirket Adı</th>
            <th>
              {!isVisible ? (
                <ButtonToggle
                  size="sm"
                  onClick={(e) => editClick()}
                  color="warning"
                >
                  Düzenle
                </ButtonToggle>
              ) : (
                <ButtonToggle
                  size="sm"
                  onClick={(e) => cancelClick()}
                  color="warning"
                >
                  İptal
                </ButtonToggle>
              )}
            </th>
            <th>
              {!isVisible ? (
                <ButtonToggle
                  size="sm"
                  onClick={(e) => setIsOpenModal(true)}
                  color="info"
                >
                  EKLE
                </ButtonToggle>
              ) : null}
            </th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => {
            return (
              <tr>
                <th scope="row">{company.companyId}</th>
                <td>
                  <input
                    id={company.companyId}
                    className={inputClass}
                    name={company.companyName}
                    defaultValue={company.companyName}
                    disabled={isDisabled}
                    onChange={(e) => onChange(e)}
                  />
                </td>
                <td>
                  {isVisible ? (
                    <ButtonToggle
                      id={company.companyId - 1}
                      name={company.companyName}
                      size="sm"
                      onClick={(e) => saveClick(e)}
                      color="success"
                    >
                      Kaydet
                    </ButtonToggle>
                  ) : null}
                </td>
                <td>
                  {isVisible ? (
                    <ButtonToggle
                      id={company.companyId}
                      name={company.companyName}
                      size="sm"
                      color="danger"
                      onClick={(e) => deleteEvent(e)}
                    >
                      SİL
                    </ButtonToggle>
                  ) : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Modal isOpen={isOpenModal} toggle="asdasd" className="aasd">
        <ModalHeader toggle={toggle}>Şirket Ekle</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Şirket Adı</Label>
              <Input
                onChange={(e) => setCompanyName(e.target.value)}
                type="text"
                placeholder="ABC Limited"
              />
            </FormGroup>
            <FormGroup>
              <Label>Şirket Alt Kodu</Label>
              <Input
                onChange={(e) => setSubCompanyId(e.target.value)}
                type="number"
                placeholder="0000"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button size="sm" onClick={(e) => addCompanyClick()} color="primary">
            EKLE
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    companies: state.poldyReducer.companies,
  };
};

export default connect(mapStateToProps, {
  getListCompany,
  updateCompany,
  addCompany,
  addPoldyCompany,
  deleteCompany,
})(CompanyList);
