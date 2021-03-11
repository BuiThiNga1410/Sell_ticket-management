import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';

import './Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

Login.propTypes = {

};

function Login(props) {
  return (
    <div className="login">
      <div className="form-login">
        <p className="login-title">Login to your account</p>
        <Form>
          <FormGroup>
            <FormLabel>Tên đăng nhập</FormLabel>
            <FormControl placeholder="Tên đăng nhập" />
          </FormGroup>

          <FormGroup>
            <FormLabel>Số điện thoại</FormLabel>
            <FormControl placeholder="Số điện thoại" />
          </FormGroup>

          <FormGroup>
            <FormLabel>Mật khẩu</FormLabel>
            <FormControl placeholder="Mật khẩu" />
          </FormGroup>
          <div className="social-network-login">
            <div className="social-network__icon"><FontAwesomeIcon icon={faFacebook} size="2x" color="rgb(30, 90, 168)" /></div>
            <div className="social-network__icon"><FontAwesomeIcon icon={faYoutube} size="2x" color="rgb(243, 44, 44)" /></div>
          </div>

          <div className="login_input"><Button className="login_input-item" variant="primary" type="submit"> Login</Button></div>
        </Form>

      </div>
    </div>
  );
}

export default Login;