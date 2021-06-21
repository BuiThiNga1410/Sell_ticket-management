import React from "react";
import "./FormInforAccount.scss";
import { useHistory } from "react-router";
import axios from "axios";
FormInforAccount.propTypes = {};

function FormInforAccount(props) {
  const history = useHistory();
  function handleBack() {
    history.push("/staff");
  }
  const submitForm = (event) => {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    axios
      .post("https://qlbvxk.herokuapp.com/api/accounts/2", {
        email: email,
        MatKhau: password,
      })
      .then((res) => {
        if (res.data.maNd) {
          let acc = {
            maNd: res.data.maNd,
          };
          localStorage.setItem("acc", JSON.stringify(acc));
          history.push("/staff");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="myForm">
      <div className="form-add-account">
        <div className="container add-acc-form">
          <h3>THÔNG TIN TÀI KHOẢN</h3>
          <div>
            <div className="formGroup">
              <h5>Username</h5>
              <input
                type="text"
                id="email"
                placeholder="Email"
                className="acc-input"
              />
            </div>
            <div className="formGroup">
              <h5>Password</h5>
              <input
                type="text"
                id="password"
                placeholder="Password"
                className="acc-input"
              />
            </div>
            <div className="form-button">
              <button className="button" onClick={handleBack}>
                Quay lại
              </button>
              <button type="reset" className="button">
                Reset
              </button>
              <button type="submit" onClick={submitForm} className="button">
                Thêm tài khoản
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormInforAccount;
