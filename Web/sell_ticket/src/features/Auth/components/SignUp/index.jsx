import React from 'react';
import PropTypes from 'prop-types';

import './SignUp.scss';

SignUp.propTypes = {

};

function SignUp(props) {
  return (
    <div className="signup">
      <div className="form">
        <p className="form-title">Đăng kí tài khoản</p>
        <form method="post">
          <div className="form-group-row">
            <p className="form-label">Họ tên</p>
            <input type="text" placeholder="Nhập họ tên" className="form-input" />
          </div>
          <div className="form-group-row">
            <p className="form-label">Số điện thoại</p>
            <input type="text" placeholder="Nhập số điện thoại" className="form-input" />
          </div>
          <div className="form-group-row">
            <p className="form-label">Email</p>
            <input type="text" placeholder="Nhập Email" className="form-input" />
          </div>
          <div className="form-btn">
            <input className="btn-submit" value="Đăng kí" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;