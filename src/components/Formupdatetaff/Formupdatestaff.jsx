import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import "./Formupdatestaff.scss";

Formupdatestaff.propTypes = {};

function Formupdatestaff(props) {
  const [employee, setEmployee] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/staffs/" + id)
      .then((res) => res.json())
      .then((result) => {
        setEmployee(result);
      });
  });
  function handleBack() {
    history.push("/staff");
  }
  function submitForm() {
    let nameOfStaff = document.getElementById("nameOfStaff").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let identification = document.getElementById("identification").value;
    let address = document.getElementById("address").value;
    let birthday = document.getElementById("dateOfBirth").value;
    axios
      .put("https://qlbvxk.herokuapp.com/api/staffs/" + id, {
        TenNd: nameOfStaff,
        Sdt: phoneNumber,
        CMND: identification,
        DiaChi: address,
        NgaySinh: birthday,
      })
      .then((res) => {
        console.log(res);

        let staff = {
          maNd: res.data.maNd,
        };

        localStorage.setItem("staff", JSON.stringify(staff));
        history.push("/staff");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="form-update-staff">
      <h4 className="title-update-staff">CẬP NHẬT THÔNG TIN </h4>
      <div className="my-form-input-1">
        <form className="form">

          <div className="form-group form-add-bus-route-1">
            <h5 for="nameOfStaff">Tên nhân viên</h5>
            <input
              type="text"
              required
              id="nameOfStaff"
              defaultValue={employee.tenNd}
              className="myform"
            />
          </div>
          <div className="form-group form-add-bus-route-1">
            <h5 for="phoneNumber">Số điện thoại</h5>
            <input
              type="text"
              required
              id="phoneNumber"
              defaultValue={employee.sdt}
              className="myform"
            />
          </div>
          <div className="form-group form-add-bus-route-1">
            <h5 for="identification">CMND</h5>
            <input
              type="text"
              required
              id="identification"
              defaultValue={employee.cmnd}
              className="myform"
            />
          </div>

          <div className="form-group form-add-bus-route-1">
            <h5 for="address">Địa chỉ</h5>
            <input
              type="text"
              required
              id="address"
              defaultValue={employee.diaChi}
              className="myform"
            />
          </div>
          <div className="form-group form-add-bus-route-1">
            <h5 for="dateOfBirth">Ngày sinh</h5>
            <input
              type="date"
              required
              id="dateOfBirth"
              defaultValue={employee.diaChi}
              className="myform"
            />
          </div>
        </form>
      </div>
      <div className="button-area button-update-staff">
        <button className="button" onClick={handleBack}>
          Quay lại
        </button>

        <button className="button" onClick={submitForm}>
          Cập nhật
        </button>
      </div>
    </div>
  );
}

export default Formupdatestaff;