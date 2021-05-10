import React from 'react';
import PropTypes from 'prop-types';
import myaxios from '../../../../app/api';

import './Profile.scss';
import { Button, Col, Form, FormCheck, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';

function Profile(props) {
  let user = JSON.parse(localStorage.getItem('user'));
  const handleClickButton = () => {
    document.getElementsByClassName("file-input")[0].click();
    // eslint-disable-next-line no-unused-expressions
  }
  const handleChoiceFile = (e) => {
    console.log("aaaa", e.target.files[0]);
    document.getElementsByClassName("avt")[0].setAttribute("style", `background-image: url("${URL.createObjectURL(e.target.files[0])}")`);
  }
  const handleChangeInfo = () => {
    let name = document.getElementById("name").value;
    let sdt = document.getElementById("sdt").value;
    let cmnd = document.getElementById("cmnd").value;
    let address = document.getElementById("address").value;
    let birthday = document.getElementById("birthday").value;
    console.log("name", name);
    console.log("sdt", sdt);
    console.log("cmnd", cmnd);
    console.log("address", address);
    console.log("birthday", birthday);
    myaxios.put(`/customers/${user.maNd}`, {
      "TenNd": name,
      "Sdt": sdt,
      "Cmnd": cmnd,
      "DiaChi": address,
      "NgaySinh": birthday,
    })
      .then((response) => {
        console.log(response.data);
        let newUser = {
          "maNd": user.maNd,
          "Email": user.Email,
          "tenNd": name,
          "sdt": sdt,
          "cmnd": cmnd,
          "diaChi": address,
          "ngaySinh": birthday,
        }
        localStorage.setItem('user', JSON.stringify(newUser));
      })
      .catch((error) => {
        console.log(error);
      })
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
                <FormControl plaintext readOnly defaultValue={user.Email.split("@")[0]} />
              </Col>
            </FormGroup>

            <FormGroup as={Row} controlId="name">
              <FormLabel column sm="3">Họ tên</FormLabel>
              <Col sm="9">
                <FormControl defaultValue={user.tenNd} />
              </Col>
            </FormGroup>

            <FormGroup as={Row} controlId="sdt">
              <FormLabel column sm="3">Số điện thoại</FormLabel>
              <Col sm="9">
                <FormControl defaultValue={user.sdt} />
              </Col>

            </FormGroup>

            <FormGroup as={Row} controlId="cmnd">
              <FormLabel column sm="3">CMND</FormLabel>
              <Col sm="9">
                <FormControl defaultValue={user.cmnd} />
              </Col>
            </FormGroup>
            <FormGroup as={Row} controlId="address">
              <FormLabel column sm="3">Địa chỉ</FormLabel>
              <Col sm="9">
                <FormControl defaultValue={user.diaChi} />
              </Col>
            </FormGroup>

            <FormGroup as={Row} controlId="birthday">
              <FormLabel column sm="3">Ngày sinh</FormLabel>
              <Col sm="9">
                <FormControl type="date" defaultValue={user.ngaySinh} />
              </Col>
            </FormGroup>
            <div className="save-info">
              <Button type="button" onClick={handleChangeInfo}>Lưu thông tin</Button>
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