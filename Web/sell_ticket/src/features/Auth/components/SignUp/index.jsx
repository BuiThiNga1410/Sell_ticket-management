import React, { useState } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";

import "./SignUp.scss";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import myaxios from "../../../../app/api";

SignUp.propTypes = {};

function SignUp(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSignUp = () => {
    let email = document.formSignup.email.value;
    let pass = document.formSignup.pass.value;
    myaxios
      .post("/accounts/2", {
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
          history.push("/");
          window.location.reload();
        } else
          document
            .querySelector(".invalid")
            .setAttribute("style", "display: block");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="signup">
      <div className="form">
        <p className="form-title">Đăng kí tài khoản</p>
        <form method="post" name="formSignup">
          <div className="form-group-row">
            <p className="form-label">Email</p>
            <input
              type="text"
              placeholder="Nhập Email"
              name="email"
              className="form-input"
            />
          </div>
          <div className="form-group-row">
            <p className="form-label">Mật khẩu</p>
            <input
              type="text"
              placeholder="Nhập mật khẩu"
              name="pass"
              className="form-input"
            />
          </div>
          <div className="form-btn">
            <input
              className="btn-submit"
              type="button"
              value="Đăng kí"
              onClick={handleSignUp}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
