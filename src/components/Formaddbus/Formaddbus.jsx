import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Formaddbus.scss";

Formaddbus.propTypes = {};
function handleBack() {
  window.location.href = "/busroute";
}
function Formaddbus(props) {
  const [employees, setEmployees] = useState([]);
  const [garages, setGarages] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/staffs")
      .then((res) => res.json())
      .then((result) => {
        setEmployees(result);
      });
  }, []);

  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/garages")
      .then((res) => res.json())
      .then((result) => {
        setGarages(result);
      });
  });

  const submitForm = (event) => {
    event.preventDefault();
    let staffId = document.querySelector("#staff").value;
    let numberOfSeat = document.getElementById("numberOfSeat").value;
    let numberPlate = document.getElementById("numberPlate").value;
    let garage = document.querySelector("#garage").value;
    axios
      .post("https://qlbvxk.herokuapp.com/api/buses/", {
        BienSoXe: numberPlate,
        MaNv: staffId,
        MaNhaXe: garage,
        SoChoNgoi: numberOfSeat
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
    <div className="form-add-bus-route">
      <h3>THÊM TUYẾN XE</h3>
      <div className="my-form-input">
        <form className="form">
          <div className="form-group form-add-bus-route-1">
            <h5 for="numberPlate">Biển số xe</h5>
            <input type="text" class="form-control" id="numberPlate" />
          </div>
          <div className="form-group form-add-bus-route-1">
            <h5 for="staff">Nhân viên</h5>
            <select id="staff" className="myselect">
              {employees.map((employee) => {
                return <option value={employee.maNd}>{employee.tenNd}</option>;
              })}
            </select>
          </div>
          <div className="form-group form-add-bus-route-1">
            <h5 for="garage">Nhà xe</h5>
            <select id="garage" className="myselect">
              {garages.map((garage) => {
                return <option value={garage.maNhaXe}>{garage.tenNhaXe}</option>;
              })}
            </select>
          </div>
          <div className="form-group form-add-bus-route-1">
            <h5 for="numberOfSeat">Số chỗ ngồi</h5>
            <input type="text" class="form-control" id="numberOfSeat" />
          </div>
        </form>
      </div>
      <div className="button-area button-of-add-route">
        <button className="button" onClick={handleBack}>
          Quay lại
        </button>

        <button className="button" onClick={submitForm}>
          Thêm tuyến xe
        </button>
      </div>
    </div>
  );
}

export default Formaddbus;