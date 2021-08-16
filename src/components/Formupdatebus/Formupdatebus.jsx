import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import "./Formupdatebus.scss";

Formupdatebus.propTypes = {};

function Formupdatebus(props) {
  const history = useHistory();
  const [bus, setBus] = useState([]);
  const { id } = useParams();
  const [employees, setEmployees] = useState([]);
  const [garages, setGarages] = useState([]);

  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/staffs")
      .then((res) => res.json())
      .then((result) => {
        setEmployees(result);
        console.log("employee", employees);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/garages")
      .then((res) => res.json())
      .then((result) => {
        setGarages(result);
      });
  });

  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/buses/" + id)
      .then((res) => res.json())
      .then((result) => {
        setBus(result);
        console.log(result);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function submitForm() {
    let staff = document.querySelector("#staff").value;
    let numberPlate = document.getElementById("numberPlate").value;
    let nhaXe = document.querySelector("#garage").value;
    console.log(staff);
    console.log(numberPlate);
    console.log(nhaXe);
    axios
      .put("https://qlbvxk.herokuapp.com/api/buses/" + id, {
        BienSoXe: numberPlate,
        MaNv: staff,
        MaNhaXe: nhaXe,
      })
      .then((res) => {
        console.log(res);
        let bus = {
          maXe: res.data.maXe,
        };
        localStorage.setItem("bus", JSON.stringify(bus));
        history.push("/bus");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleBack() {
    history.push("/bus");
  }
  return (
    <div className="form-add-bus">
      <h3 className="title-update-bus">CẬP NHẬT THÔNG TIN XE</h3>
      <div className="my-form-input">
        <form className="form">
          <div className="form-group form-add-bus-route-1">
            <h5 for="numberPlate">Biển số xe</h5>
            <input
              type="text"
              required
              id="numberPlate"
              defaultValue={bus.bienSoXe}
              className="myform"
            />
          </div>
          <div className="form-group form-add-bus-route-1">
            <h5 for="staff">Nhân viên</h5>
            <select id="staff" className="myselect">
              {employees.map((staff) => {
                return (
                  <option
                    value={staff.maNd}
                    selected={bus.tenNv === staff.tenNd ? "selected" : ""}
                  >
                    {staff.tenNd}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group form-add-bus-route-1">
            <h5 for="garage">Nhà xe</h5>
            <select id="garage" className="myselect">
              {garages.map((garage) => {
                return (
                  <option
                    value={garage.maNhaXe}
                    selected={
                      bus.tenNhaXe &&
                        bus.tenNhaXe === garage.tenNhaXe
                        ? "selected"
                        : ""
                    }
                  >
                    {garage.tenNhaXe}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
      </div>
      <div className="button-area button-of-add-route">
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

export default Formupdatebus;