import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import "./Formupdatebus.scss";

Formupdatebus.propTypes = {};

function Formupdatebus(props) {
  const history = useHistory();
  const [bus, setBus] = useState([]);
  const { id } = useParams();
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/staffs")
      .then((res) => res.json())
      .then((result) => {
        setEmployees(result);
        console.log("employee", employees);
      });
  }, []);

  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/buses/" + id)
      .then((res) => res.json())
      .then((result) => {
        setBus(result);
      });
  });
  const submitForm = (event) => {
    event.preventDefault();
    let ownerId = document.querySelector(".myselect").value;
    let numberOfSeats = document.getElementById("numberOfSeats").value;
    //let numberPlate = document.getElementById("numberPlate").value;
    axios
      .put("https://qlbvxk.herokuapp.com/api/buses/2", {
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
    <div className="form-update-bus">
      <h1 className="update-bus-title">CẬP NHẬT THÔNG TIN XE</h1>
      <div className="form-input">
        <span>Tên chủ xe:</span>
        <br />
        <select className="form-text myselect">
          {employees.map((staff) => {
            return (
              <option
                value={staff.maNd}
                selected={bus.tenNv == staff.tenNd ? "selected" : ""}
              >
                {staff.tenNd}
              </option>
            );
          })}
        </select>
        <br />

        <span>Số chỗ:</span>
        <br />
        <input
          type="text"
          required
          id="numberOfSeats"
          className="form-text"
          defaultValue={bus.soChoNgoi}
        />
        <br />

        <span>Biển số xe:</span>
        <br />
        <input
          type="text"
          required
          name="numberPlate"
          className="form-text"
          defaultValue={bus.bienSoXe}
          readOnly
        />
        <br />
      </div>
      <div className="button-update-bus">
        <button className="button">
          <a href="/bus">Quay lại</a>
        </button>

        <button type="submit" onClick={submitForm} className="button">
          Cập nhật
        </button>
      </div>
    </div>
  );
}

export default Formupdatebus;
