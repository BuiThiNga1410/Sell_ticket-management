import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormText,
  InputGroup,
} from "react-bootstrap";
import FormFileInput from "react-bootstrap/esm/FormFileInput";
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

  function submitForm() {
    let ownerId = document.querySelector(".myselect").value;

    let numberPlate = document.getElementById("numberPlate").value;
    let nhaXe = document.getElementById("nhaXe").value;
    axios
      .put("https://qlbvxk.herokuapp.com/api/buses/" + id, {
        MaNv: ownerId,
        BienSoXe: numberPlate,
        NhaXe: nhaXe,
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
          readOnly
        />
        <br />

        <span>Biển số xe:</span>
        <br />
        <input
          type="text"
          required
          id="numberPlate"
          className="form-text"
          defaultValue={bus.bienSoXe}
        />
        <br />
        <span>Nhà xe:</span>
        <br />
        <input
          type="text"
          required
          id="nhaXe"
          className="form-text"
          defaultValue={bus.nhaXe}
        />
        <br />
      </div>
      <div className="button-update-bus">
        <button className="button" onClick={handleBack}>
          Quay lại
        </button>

        <button type="submit" onClick={submitForm} className="button">
          Cập nhật
        </button>
      </div>
    </div>
  );
}

export default Formupdatebus;