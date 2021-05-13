import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import myaxios from '../../../../app/api';

UpdateCustomer.propTypes = {

};

function UpdateCustomer(props) {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState([]);
  console.log(customerId);
  useEffect(() => {
    myaxios.get(`/customers/${customerId}`)
      .then((response) => {
        setCustomer(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  const handleUpdate = (e) => {
    e.preventDefault();
    let tenNd = document.getElementById("tenNd").value;
    let sdt = document.getElementById("sdt").value;
    let cmnd = document.getElementById("cmnd").value;
    let diaChi = document.getElementById("diaChi").value;
    let ngaySinh = document.getElementById("ngaySinh").value;
    console.log(tenNd + sdt + cmnd + diaChi + ngaySinh);
    myaxios.put(`/customers/${customerId}`, {
      "TenNd": tenNd,
      "Sdt": sdt,
      "Cmnd": cmnd,
      "DiaChi": diaChi,
      "NgaySinh": ngaySinh
    })
      .then((response) => {
        window.location.href = "/customer";
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <div className="container">
      <h4 className="text-title">CHỈNH SỬA THÔNG TIN KHÁCH HÀNG</h4>
      <form>
        <div class="form-group row">
          <label for="maNd" class="col-sm-2 col-form-label">Mã khách hàng</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="maNd" defaultValue={customer.maNd} readOnly></input>
          </div>
        </div>
        <div class="form-group row">
          <label for="tenNd" class="col-sm-2 col-form-label">Tên khách hàng</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="tenNd" defaultValue={customer.tenNd} ></input>
          </div>
        </div>
        <div class="form-group row">
          <label for="sdt" class="col-sm-2 col-form-label">Số điện thoại</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="sdt" defaultValue={customer.sdt}></input>
          </div>
        </div>
        <div class="form-group row">
          <label for="cmnd" class="col-sm-2 col-form-label">CMND</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="cmnd" defaultValue={customer.cmnd}></input>
          </div>
        </div>
        <div class="form-group row">
          <label for="diaChi" class="col-sm-2 col-form-label">Địa chỉ</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="diaChi" defaultValue={customer.diaChi}></input>
          </div>
        </div>
        <div class="form-group row">
          <label for="ngaySinh" class="col-sm-2 col-form-label">Ngày sinh</label>
          <div class="col-sm-10">
            <input type="date" class="form-control" id="ngaySinh" defaultValue={customer.ngaySinh}></input>
          </div>
        </div>
        <div className="center">
          <button className="btn btn-primary" onClick={handleUpdate}>Cập nhật</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateCustomer;