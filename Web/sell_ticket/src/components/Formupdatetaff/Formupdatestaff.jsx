import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Formupdatestaff.scss";

Formupdatestaff.propTypes = {};

function Formupdatestaff(props) {
  const [employee, setEmployee] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/staffs/" + id)
      .then((res) => res.json())
      .then((result) => {
        setEmployee(result);
      });
  });
  return (
    <div className="form-add-staff">
      <span className="add-title"> CẬP NHẬT NHÂN VIÊN</span>
      <div className="form-staff">
        <div className="col">
          <span>Tên nhân viên:</span>
          <br />
          <input
            type="text"
            required
            name="nameofstaff"
            className="form-text"
            value={employee.tenNd}
          />
          <br />
          <span>Số điện thoại:</span>
          <br />
          <input
            type="text"
            required
            name="phonenumber"
            className="form-text"
            value={employee.sdt}
          />
          <br />
          <span>Địa chỉ email:</span>
          <br />
          <input
            type="text"
            required
            name="emailaddress"
            className="form-text"
            value={employee.email}
          />
          <br />
        </div>
        <div className="col">
          <span>Ngày sinh:</span>
          <br />
          <input
            type="date"
            required
            name="date-of-birth"
            className="form-text"
            value={employee.ngaySinh}
          />
          <br />

          <span>Username:</span>
          <br />
          <input
            type="text"
            required
            name="username"
            className="form-text"
            value={employee.email}
          />
          <br />
          <span>Mật khẩu:</span>
          <br />
          <input
            type="password"
            required
            name="password"
            className="form-text"
            value={employee.password}
          />
          <br />
        </div>
        <div className="clear"></div>
      </div>
      <div className="button-area button-update-staff">
        <button className="button">Quay lại</button>

        <button className="button">Cập nhật</button>
      </div>
    </div>
  );
}

export default Formupdatestaff;
