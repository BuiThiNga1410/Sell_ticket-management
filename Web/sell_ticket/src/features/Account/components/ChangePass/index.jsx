import React from 'react';
import PropTypes from 'prop-types';
import { Col, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';

import './ChangePass.scss';

ChangePass.propTypes = {

};

function ChangePass(props) {
  return (
    <div>
      <p className="form-changePass-label">Thay đổi mật khẩu</p>
      <div className="form-changePass">
        <Form>
          <FormGroup as={Row}>
            <FormLabel column sm="3">Mật khẩu cũ</FormLabel>
            <Col sm="9">
              <FormControl />
            </Col>
          </FormGroup>

          <FormGroup as={Row}>
            <FormLabel column sm="3">Mật khẩu mới</FormLabel>
            <Col sm="9">
              <FormControl />
            </Col>

          </FormGroup>

          <FormGroup as={Row}>
            <FormLabel column sm="3">Nhập lại mật khẩu</FormLabel>
            <Col sm="9">
              <FormControl />
            </Col>

          </FormGroup>
        </Form>
      </div>

    </div>
  );
}

export default ChangePass;