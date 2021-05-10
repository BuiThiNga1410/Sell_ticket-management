import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import {useState} from 'react';
import axios from 'axios';

import './Login.scss';
import myaxios from '../../../../app/api';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

Login.propTypes = {

};

function Login(props) {
  const history = useHistory();
  const handleValidate = () => {
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#pass").value;
    myaxios.post('/accounts/validate/3', {
      "Email" : email,
      "MatKhau" : pass,
  })
    .then((response) => {
      if(response.data.maNd)
      {
        let user = {
          ...response.data,
          Email: email,
        }
        localStorage.setItem("user", JSON.stringify(user));
        history.push('/');
        window.location.reload();
      } 
      else document.querySelector('.invalid').setAttribute("style", "display: block");
    })
    .catch((error) => {
      console.log(error);
    })
  }
  return (
    <div className="login">
      <div className="form-login">
        <p className="login-title">Login to your account</p>
        <Form>
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <FormControl placeholder="Email" id = "email" />
          </FormGroup>

          <FormGroup>
            <FormLabel>Mật khẩu</FormLabel>
            <FormControl placeholder="Mật khẩu" id = "pass" type="password" />
          </FormGroup>
          <p className="invalid">Thông tin đăng nhập không hợp lệ!!!</p>
          <div className="login_input"><Button className="login_input-item" variant="primary" onClick = {handleValidate}> Login</Button></div>
        </Form>
      </div>
    </div>
  );
}

export default Login;