import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { loginUser } from "../redux/actions/auth_actions/authActions";

const Login = (props) => {
  const [stateUserName, setUserName] = useState("");
  const [statePassword, setPassword] = useState("");

  const loginData = {
    userName: stateUserName,
    password: statePassword,
  };

  const onSubmit = (e) => {
    props.loginUser(loginData, props.history);
    e.preventDefault();
  };
  return (
    <div className="join-form">
      <Form onSubmit={(e) => onSubmit(e)}>
        <h3 className="text-center">
          <span className="font-weight-bold">POLDY</span>
        </h3>

        <FormGroup>
          <Label>Kullanıcı Adı</Label>
          <Input
            type="text"
            placeholder="Lütfen E-Mail adresinizi giriniz"
            name="UserName"
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Şifre</Label>
          <Input
            type="password"
            placeholder="Lütfen şifrenizi giriniz"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>

        <Button className="btn-block bn-lg" color="primary">
          Giriş Yap
        </Button>
      </Form>
      <a href="register" className="register-link">
        Kaydol
      </a>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.authReducer.tokenData
  };
};
export default connect(mapStateToProps, { loginUser })(Login);
