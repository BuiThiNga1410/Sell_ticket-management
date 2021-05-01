import React from 'react';
import PropTypes from 'prop-types';

import './Profile.scss';
import { Button, Col, Form, FormCheck, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';

Profile.propTypes = {

};

function Profile(props) {
  const handleClickButton = ()=>{
    document.getElementsByClassName("file-input")[0].click();
    // eslint-disable-next-line no-unused-expressions
  }
  const handleChoiceFile = (e)=> {
    console.log("aaaa", e.target.files[0]);
    document.getElementsByClassName("avt")[0].setAttribute("style", `background-image: url("${URL.createObjectURL(e.target.files[0])}")`);
  }
  return (
    <div>
      <p className="profile-title">Hồ sơ của tôi</p>
      <div className="profile">
        <div className="form-profile">
          <Form>
            <FormGroup as={Row}>
              <FormLabel column sm="3">Tên đăng nhập</FormLabel>
              <Col sm="9">
                <FormControl plaintext readOnly defaultValue="NgaBui1410" />
              </Col>
            </FormGroup>

            <FormGroup as={Row}>
              <FormLabel column sm="3">Họ tên</FormLabel>
              <Col sm="9">
                <FormControl defaultValue="Bùi Thị Nga" />
              </Col>
            </FormGroup>

            <FormGroup as={Row}>
              <FormLabel column sm="3">Số điện thoại</FormLabel>
              <Col sm="9">
                <FormControl defaultValue="0376755120" />
              </Col>

            </FormGroup>

            <FormGroup as={Row}>
              <FormLabel column sm="3">Email</FormLabel>
              <Col sm="9">
                <FormControl defaultValue="Ngaskiper1410@gmail.com" />
              </Col>
            </FormGroup>

            <FormGroup as={Row}>
              <FormLabel column sm="3">Giới tính</FormLabel>
              <Col sm="2">
                <FormCheck
                  type="radio"
                  label="Nam"
                  name="gender"
                />
              </Col>

              <Col sm="2">
                <FormCheck
                  type="radio"
                  label="Nữ"
                  name="gender"
                />
              </Col>
              <Col sm="2">
                <FormCheck
                  type="radio"
                  label="Khác"
                  name="gender"
                />
              </Col>
            </FormGroup>

            <FormGroup as={Row}>
              <FormLabel column sm="3">Ngày sinh</FormLabel>
              <Col sm="3">
                <FormControl as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </FormControl>
              </Col>

              <Col sm="3">
                <FormControl as="select">
                  <option>Tháng 1</option>
                  <option>Tháng 2</option>
                  <option>Tháng 3</option>
                </FormControl>
              </Col>

              <Col sm="3">
                <FormControl as="select">
                  <option>2000</option>
                  <option>2001</option>
                  <option>2002</option>
                </FormControl>
              </Col>
            </FormGroup>
            <div className="save-info">
              <Button type="submit">Lưu thông tin</Button>
            </div>
          </Form>
        </div>
        <div className="profile-avt">
          <div className="avt" />
          <button className="btn btn-outline-primary" onClick={handleClickButton}>Chọn ảnh</button>
          <input className="file-input" type="file" accept=".png, .jpg" onChange={handleChoiceFile}></input>
        </div>
      </div>
    </div>
  );
}

export default Profile;