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
    <div className="form-add-staff">
      <span className="add-title"> CẬP NHẬT NHÂN VIÊN</span>
      <div className="form-staff">
        <span>Tên nhân viên:</span>
        <br />
        <input
          type="text"
          required
          id="nameOfStaff"
          className="form-text"
          defaultValue={employee.tenNd}
        />
        <br />
        <span>Số điện thoại:</span>
        <br />
        <input
          type="text"
          required
          id="phoneNumber"
          className="form-text"
          defaultValue={employee.sdt}
        />
        <br />
        <span>CMND</span>
        <br />
        <input
          type="text"
          required
          id="identification"
          className="form-text"
          defaultValue={employee.cmnd}
        />
        <br />
        <span>Địa chỉ:</span>
        <br />
        <input
          type="text"
          required
          id="address"
          className="form-text"
          defaultValue={employee.diaChi}
        />
        <br />

        <span>Ngày sinh:</span>
        <br />
        <input
          type="date"
          required
          id="dateOfBirth"
          className="form-text"
          //defaultValue={employee.ngaySinh.split("T")[0]}
        />
        <br />
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