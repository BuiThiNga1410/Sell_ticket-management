import React from 'react';
import PropTypes from 'prop-types';
import myaxios from '../../../../app/api';

AddCustomer.propTypes = {

};

function AddCustomer(props) {
  const handleAdd = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const tenNd = document.getElementById("tenNd").value;
    const sdt = document.getElementById("sdt").value;
    const cmnd = document.getElementById("cmnd").value;
    const diaChi = document.getElementById("diaChi").value;
    const ngaySinh = document.getElementById("ngaySinh").value;

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
  return (
    <div className="container">
      <h4 className="text-title">THÊM KHÁCH HÀNG</h4>
      <form>
        <div class="form-group row">
          <label for="email" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="email"></input>
          </div>
        </div>
        <div class="form-group row">
          <label for="pass" class="col-sm-2 col-form-label">Mật khẩu</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="pass"></input>
          </div>
        </div>
        <div class="form-group row">
          <label for="tenNd" class="col-sm-2 col-form-label">Tên khách hàng</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="tenNd" ></input>
          </div>
        </div>
        <div class="form-group row">
          <label for="sdt" class="col-sm-2 col-form-label">Số điện thoại</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="sdt"></input>
          </div>
        </div>
        <div class="form-group row">
          <label for="cmnd" class="col-sm-2 col-form-label">CMND</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="cmnd"></input>
          </div>
        </div>
        <div class="form-group row">
          <label for="diaChi" class="col-sm-2 col-form-label">Địa chỉ</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="diaChi"></input>
          </div>
        </div>
        <div class="form-group row">
          <label for="ngaySinh" class="col-sm-2 col-form-label">Ngày sinh</label>
          <div class="col-sm-10">
            <input type="date" class="form-control" id="ngaySinh"></input>
          </div>
        </div>
        <div className="center">
          <button className="btn btn-primary" onClick={handleAdd}>Cập nhật</button>
        </div>
      </form>
    </div>
  );
}

export default AddCustomer;