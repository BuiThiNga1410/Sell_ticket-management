import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import myaxios from '../../../../app/api';

import './ChangePass.scss';
ChangePass.propTypes = {

};

function ChangePass(props) {
  let user = JSON.parse(localStorage.getItem('user'));
  const handleChangePass = () => {
    let oldPass = document.getElementById("oldPass").value;
    let newPass = document.getElementById("newPass").value;
    let confirmPass = document.getElementById("confirmPass").value;
    if(newPass === confirmPass) {
      myaxios.put(`/accounts/${user.maNd}`,{
        "MatKhauCu": oldPass,
        "MatKhau" : newPass
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }
  return (
    <div class="change-pass">
      <p className="form-changePass-label">Thay đổi mật khẩu</p>
      <div className="form-changePass">
        <Form>
          <FormGroup as={Row} controlId="oldPass">
            <FormLabel column sm="3">Mật khẩu cũ</FormLabel>
            <Col sm="9">
              <FormControl type="password" />
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="newPass">
            <FormLabel column sm="3">Mật khẩu mới</FormLabel>
            <Col sm="9">
              <FormControl type="password" />
            </Col>

          </FormGroup>

          <FormGroup as={Row} controlId="confirmPass">
            <FormLabel column sm="3">Nhập lại mật khẩu</FormLabel>
            <Col sm="9">
              <FormControl type="password" />
            </Col>
          </FormGroup>
          <div class ="btn-wrap">
          <Button onClick={handleChangePass} >Đổi mật khẩu</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ChangePass;