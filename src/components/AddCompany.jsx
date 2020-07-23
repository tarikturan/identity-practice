import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const AddCompany = (props) => {
  const [companyName, setCompanyName] = useState("");
  const [companyId, setCompanyId] = useState(null);

  const companyData = {
      companyName: companyName,
      companyId: companyId
  }

  const onSubmit = (e) => {
    e.preventDefault(companyData);
  };

  return (
    <div className="add-form col-sm-4">
      <Form
        className="row justify-content-center"
        onSubmit={(e) => onSubmit(e)}
      >
        <h3 className="text-center col-sm-12">
          <span className="font-weight-bold">ŞİRKET EKLE</span>
        </h3>
        <FormGroup>
          <Label>Şirket Adı</Label>
          <Input
            type="text"
            placeholder="Şirket adı"
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Şirket Kodu</Label>
          <Input
            type="number"
            placeholder="Şirket Kodu"
            onChange={(e) => setCompanyId(e.target.value)}
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

export default connect(null)(AddCompany);
