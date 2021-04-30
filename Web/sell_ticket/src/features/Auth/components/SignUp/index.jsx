import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {useEffect} from 'react';

import './SignUp.scss';

SignUp.propTypes = {

};

function SignUp(props) {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  // const handleSignUp = () => {
  //   console.log(document.formlogin.email.value);
  //   var user = document.formlogin.email.value
  //   setUsername(user);
  //   setPass(document.formlogin.pass.value);
  // }
//   useEffect(() => {
//     axios.post('https://401e1edf1e02.ngrok.io/api/accounts/3', {
//         "Email": document.formlogin.email.value,
//         "MatKhau": document.formlogin.pass.value,
//        })
//       .then(function(response) {
//         console.log(response);
//       })
//       .catch((err) => {
//         console.log(err)
//       });
// }, [username]);
useEffect(() => {
  // POST request using axios inside useEffect React hook
  const article = { "Email" : "leaali@gmail.com",
  "MatKhau" : "1234578" };
  axios.post('https://401e1edf1e02.ngrok.io/api/accounts/2', article)
      .then(response => console.log(response));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);
  return (
    <div className="signup">
      <div className="form">
        <p className="form-title">Đăng kí tài khoản</p>
        <form method="post" name="formlogin">
        <div className="form-group-row">
            <p className="form-label">Email</p>
            <input type="text" placeholder="Nhập Email" name="email" className="form-input" />
          </div>
          <div className="form-group-row">
            <p className="form-label">Mật khẩu</p>
            <input type="text" placeholder="Nhập mật khẩu" name="pass" className="form-input" />
          </div>
          <div className="form-btn">
            <input className="btn-submit" type="button" value="Đăng kí"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;