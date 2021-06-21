import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

import "./Login.scss";
import myaxios from "../../../../app/api";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

Login.propTypes = {};

function Login(props) {
  const history = useHistory();
  let valid = true;
  const handleValidate = (e) => {
    let regex = /\S+@\S+\.\S+/;
    if (!regex.test(e.target.value)) {
      valid = false;
      document.querySelector(".text-error").setAttribute("style", "display: block");
    }
    else {
      valid = true;
      document.querySelector(".text-error").setAttribute("style", "display: none");
    }

  }
  const handleLogin = () => {
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#pass").value;
    if(valid && email && pass) {
      myaxios
      .post("/accounts/validate", {
        Email: email,
        MatKhau: pass,
      })
      .then((response) => {
        if (response.data.maNd) {
          let user = {
            ...response.data,
            Email: email,
          };
          localStorage.setItem("user", JSON.stringify(user));
          if (response.data.vaitro === 1) window.location.href = "/admin/home";
          else window.location.href = "/";
          // window.location.reload();
        } else
          document
            .querySelector(".invalid")
            .setAttribute("style", "display: block");
      })
      .catch((error) => {
        console.log(error);
      });
    }
  };
  return (
    <div className="login">
      <div className="form-login">
        <p className="login-title">Login to your account</p>
        <Form>
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <FormControl placeholder="Email" id="email" onKeyUp={handleValidate} required />
            <p className="text-error">Email nhập vào không hợp lệ</p>
          </FormGroup>

          <FormGroup>
            <FormLabel>Mật khẩu</FormLabel>
            <FormControl placeholder="Mật khẩu" id="pass" type="password" required />
          </FormGroup>
          <p className="invalid">Thông tin đăng nhập không hợp lệ!!!</p>
          <p>Bạn muốn <a href="/sign-up">Đăng kí</a> ?</p>
          <div className="login_input">
            <Button
              className="login_input-item"
              variant="primary"
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
