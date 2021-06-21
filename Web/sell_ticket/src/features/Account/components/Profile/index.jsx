import React from 'react';
import PropTypes from 'prop-types';
import myaxios from '../../../../app/api';

import './Profile.scss';
import { Button, Col, Form, FormCheck, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

function Profile(props) {
  let user = JSON.parse(localStorage.getItem('user'));
  let valid = true;
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
    myaxios.put(`/customers/${user.maNd}`, {
      "TenNd": name,
      "Sdt": sdt,
      "Cmnd": cmnd,
      "DiaChi": address,
      "NgaySinh": birthday,
    })
      .then((response) => {
        document.getElementsByClassName("overlay")[0].setAttribute("style", "display: flex");
        console.log(response.data);
        let newUser = {
          "maNd": user.maNd,
          "Email": user.Email,
          "tenNd": name,
          "sdt": sdt,
          "cmnd": cmnd,
          "diaChi": address,
          "ngaySinh": birthday,
          "vaitro": user.vaitro,
        }
        localStorage.setItem('user', JSON.stringify(newUser));
        setTimeout(() => {
          window.location.href = "/ticket/trip-list";
        }, 1000)
      })
      .catch((error) => {
        console.log(error);
      })
  }
  const handleValidate = (e) => {
    let regex = /./;
    switch (e.target.id) {
      case "sdt":
        regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        break;
      case "email":
        regex = /\S+@\S+\.\S+/;
        break;
      case "name":
        regex = /^\D+$/;
        break;
      default:
        break;
    }
    if (!regex.test(e.target.value)) {
      valid = false;
      e.target.parentElement.childNodes[1].setAttribute("style", "display: block");
    }
    else {
      valid = true;
      e.target.parentElement.childNodes[1].setAttribute("style", "display: none");
    }
  }
  return (
    <div className="profile-page">
      <p className="profile-title">Hồ sơ của tôi</p>
      <div className="profile">
        <div className="form-profile">
          <Form>
            <FormGroup as={Row}>
              <FormLabel column sm="3">Tên đăng nhập</FormLabel>
              <Col sm="9">
                <FormControl plaintext readOnly defaultValue={user.Email.split("@")[0]}/>
              </Col>
            </FormGroup>

            <FormGroup as={Row} controlId="name">
              <FormLabel column sm="3">Họ tên</FormLabel>
              <Col sm="9">
                <FormControl defaultValue={user.tenNd} onKeyUp={handleValidate}/>
                <p className="text-error">Tên khách hàng nhập vào không hợp lệ</p>
              </Col>
            </FormGroup>

            <FormGroup as={Row} controlId="sdt">
              <FormLabel column sm="3">Số điện thoại</FormLabel>
              <Col sm="9">
                <FormControl defaultValue={user.sdt} onKeyUp={handleValidate}/>
                <p className="text-error">Số điện thoại nhập vào không hợp lệ</p>
              </Col>

            </FormGroup>

            <FormGroup as={Row} controlId="cmnd">
              <FormLabel column sm="3">CMND</FormLabel>
              <Col sm="9">
                <FormControl type="number" defaultValue={user.cmnd} />
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
      <div className="overlay">
        <div className="notification">
          <p className="notifi-label">Lưu thông tin thành công</p>
          <FontAwesomeIcon icon={faCheckCircle} color="green" size="2x"/>
        </div>
      </div>
    </div>
  );
}

export default Profile;