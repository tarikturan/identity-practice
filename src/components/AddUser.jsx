import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addUser } from "../redux/actions/poldy_actions/poldyActions";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const AddUser = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [companyId, setCompanyId] = useState(0);
  const [position, setPosition] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [fromVisible, setFormVisible] = useState(false);

  const userData = {
    email: email,
    password: password,
    passwordAgain: passwordAgain,
    companyId: parseInt(companyId),
    position: position,
    firstName: firstName,
    lastName: lastName,
    userName: userName,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.addUser(userData, userData.position);
  };

  useEffect(() => {
    onFormVisible();
  }, []);

  const onFormVisible = () => {
    let visible = false;
    if (props.userData.companyId === 1) {
      visible = true;
    }
    if (props.userData.companyId !== 1) {
      setCompanyId(props.userData.companyId);
    }
    setFormVisible(visible);
  };

  return (
    <div className="add-form col-sm-4">
      <Form
        className="row justify-content-center"
        onSubmit={(e) => onSubmit(e)}
      >
        <h3 className="text-center col-sm-12">
          <span className="font-weight-bold">KULLANICI EKLE</span>
        </h3>
        <FormGroup>
          <Label>Ad</Label>
          <Input
            type="text"
            placeholder="Adı"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Soyad</Label>
          <Input
            type="text"
            placeholder="Soyadı"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Kullanıcı Adı</Label>
          <Input
            type="text"
            placeholder="Kullanıcı adı"
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        {fromVisible ? (
          <FormGroup>
            <Label>Şirket Kodu</Label>
            <Input
              type="number"
              placeholder="Şirket Kodu"
              onChange={(e) => setCompanyId(e.target.value)}
              required
            />
          </FormGroup>
        ) : null}

        <FormGroup>
          <Label>Rol</Label>
          <Input
            type="text"
            placeholder="Rol ?"
            onChange={(e) => setPosition(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Şifre</Label>
          <Input
            type="password"
            placeholder="Şifre"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Şifreyi Doğrulayın</Label>
          <Input
            type="password"
            placeholder="Şifreyi doğrulayn"
            onChange={(e) => setPasswordAgain(e.target.value)}
            required
          />
        </FormGroup>

        <Button className="btn-block btn-md" color="success">
          EKLE
        </Button>
      </Form>
    </div>
  );
};

const mapStateProps = (state) => {
  return {
    userData: state.companyReducer.userData,
    tokenData: state.authReducer.tokenData,
  };
};

export default connect(mapStateProps, { addUser })(AddUser);
