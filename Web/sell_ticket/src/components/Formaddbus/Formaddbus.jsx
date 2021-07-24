import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Formaddbus.scss";

Formaddbus.propTypes = {};

function Formaddbus(props) {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/staffs")
      .then((res) => res.json())
      .then((result) => {
        setEmployees(result);
      });
  }, []);
  const history = useHistory();

  const submitForm = (event) => {
    event.preventDefault();
    let ownerId = document.querySelector(".myselect").value;
    //let phoneNumber = document.formAddBus.phoneNumber.value;
    let numberOfSeats = document.getElementById("numberOfSeats").value;
    let numberPlate = document.getElementById("numberPlate").value;
    axios
      .post("https://qlbvxk.herokuapp.com/api/buses/", {
        BienSoXe: numberPlate,
        MaNv: ownerId,
        SoChoNgoi: numberOfSeats,
      })
      .then((res) => {
        if (res.data.maXe) {
          let bus = {
            maXe: res.data.maXe,
          };
          localStorage.setItem("bus", JSON.stringify(bus));
          history.push("/bus");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="form-add-bus">
      <h3 className="add-bus-title">THÊM XE</h3>
      <form method="post" className="formBus">
        <div className="my-form-input">
          <h5>Tên tài xế:</h5>

          <select className="form-text myselect">
            {employees.map((staff) => {
              return <option value={staff.maNd}>{staff.tenNd}</option>;
            })}
          </select>
          <br />

          <h5>Số chỗ:</h5>

          <input
            type="number"
            required
            id="numberOfSeats"
            className="form-text"
          />
          <br />

          <h5>Biển số xe:</h5>

          <input type="text" required id="numberPlate" className="form-text" />
          <br />
        </div>
        <div className="button-add-bus">
          <button className="button">Quay lại</button>
          <button type="reset" className="button">
            Reset
          </button>
          <button type="submit" onClick={submitForm} className="button">
            Thêm xe
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formaddbus;