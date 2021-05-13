import React from 'react';
import PropTypes from 'prop-types';
import myaxios from '../../../../app/api';
import './index.scss';

AddCustomer.propTypes = {

};

function AddCustomer(props) {
  let valid = true;
  const handleAdd = (e) => {
    e.preventDefault();
    if (valid) {
      const email = document.getElementById("email").value;
      const pass = document.getElementById("pass").value;
      const tenNd = document.getElementById("tenNd").value;
      const sdt = document.getElementById("sdt").value;
      const cmnd = document.getElementById("cmnd").value;
      const diaChi = document.getElementById("diaChi").value;
      const ngaySinh = document.getElementById("ngaySinh").value;
      if(!(email && pass && tenNd && sdt && cmnd && diaChi && ngaySinh)) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
      }
      myaxios.post("/accounts/3", {
        "Email": email,
        "MatKhau": pass,
      })
        .then((response) => {
          console.log(response.data)
          myaxios.put(`customers/${response.data.maNd}`, {
            "TenNd": tenNd,
            "Sdt": sdt,
            "Cmnd": cmnd,
            "DiaChi": diaChi,
            "NgaySinh": ngaySinh
          })
            .then((res) => {
              console.log(res.data);
            })
            .catch((error) => {
              console.log(error);
            })
          window.location.href = "/customer";
        })
        .catch((error) => {
          console.log(error);
        })
    }
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
      case "tenNd":
        regex = /^[a-zA-Z ]{2,30}$/;
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
    <div className="container">
      <h4 className="text-title">THÊM KHÁCH HÀNG</h4>
      <form>
        <div class="form-group row">
          <label for="email" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="email" onKeyUp={handleValidate} required></input>
            <p className="text-error">Email nhập vào không hợp lệ</p>
          </div>
        </div>
        <div class="form-group row">
          <label for="pass" class="col-sm-2 col-form-label">Mật khẩu</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="pass" required></input>
          </div>
        </div>
        <div class="form-group row">
          <label for="tenNd" class="col-sm-2 col-form-label">Tên khách hàng</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="tenNd" onKeyUp={handleValidate} required></input>
            <p className="text-error">Tên khách hàng nhập vào không hợp lệ</p>
          </div>
        </div>
        <div class="form-group row">
          <label for="sdt" class="col-sm-2 col-form-label">Số điện thoại</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="sdt" onKeyUp={handleValidate} required></input>
            <p className="text-error">Số điện thoại nhập vào không hợp lệ</p>
          </div>
        </div>
        <div class="form-group row">
          <label for="cmnd" class="col-sm-2 col-form-label">CMND</label>
          <div class="col-sm-10">
            <input type="number" class="form-control" id="cmnd" required></input>
          </div>
        </div>
        <div class="form-group row">
          <label for="diaChi" class="col-sm-2 col-form-label">Địa chỉ</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="diaChi" required></input>
          </div>
        </div>
        <div class="form-group row">
          <label for="ngaySinh" class="col-sm-2 col-form-label">Ngày sinh</label>
          <div class="col-sm-10">
            <input type="date" class="form-control" id="ngaySinh"></input>
          </div>
        </div>
        <div className="center">
          <button className="btn btn-primary" onClick={handleAdd}>Thêm mới</button>
        </div>
      </form>
    </div>
  );
}

export default AddCustomer;