import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getListCompany,
  updateCompany,
  addCompany,
  addPoldyCompany,
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

  useEffect(() => {
    props.getListCompany();
  },[]);

  const toggle = () => setIsOpenModal(!isOpenModal);
  const editClick = () => {
    setDisabled(false);
    setVisible(true);
    setInputClass("gridInputWithBorder");
  };

  const saveClick = (e) => {
    props.updateCompany(companies[e.target.id]);
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
  console.log(companyData);
  return (
    <div className="gridTable">
      <Table striped>
        <thead>
          <tr>
            <th>Şirket ID</th>
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
              ) : null}
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
                    id={company.companyId - 1}
                    className={inputClass}
                    defaultValue={company.companyName}
                    disabled={isDisabled}
                    onChange={(e) =>
                      (companies[e.target.id].companyName = e.target.value)
                    }
                  />
                </td>
                <td>
                  {isVisible ? (
                    <ButtonToggle
                      id={company.companyId - 1}
                      size="sm"
                      onClick={(e) => saveClick(e)}
                      color="success"
                    >
                      Kaydet
                    </ButtonToggle>
                  ) : null}
                </td>
                <td></td>
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
          <Button onClick={(e) => addCompanyClick()} color="primary">
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
})(CompanyList);
