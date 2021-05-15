import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";
import axios from "axios";

FormAddBusStation.propTypes = {};

function FormAddBusStation(props) {
  const history = useHistory();

  function handleBack() {
    window.location.href = "/busroute/add";
  }
  function submitForm() {
    let nameOfBusStation = document.getElementById("nameOfBusStation").value;
    let address = document.getElementById("address").value;
    console.log(nameOfBusStation);
    console.log(address);
    axios
      .post("https://qlbvxk.herokuapp.com/api/busstations", {
        TenBx: nameOfBusStation,
        DiaChi: address,
      })
      .then((res) => {
        if (res.data.maBx) {
          let busstation = {
            maBx: res.data.maBx,
          };
          localStorage.setItem("busstation", JSON.stringify(busstation));
          history.push("/busroute/add");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="form-add-bus-route">
      <p className="add-route-title">THÊM BẾN XE</p>
      <div className="form-input">
        <span>Tên bến xe</span>
        <br />
        <input type="text" required id="nameOfBusStation" className="myform" />
        <br />
        <span>Địa chỉ</span>
        <br />
        <input type="text" required id="address" className="myform" />
        <br />
      </div>
      <div className="button-area button-of-add-route">
        <button className="button" onClick={handleBack}>
          Quay lại
        </button>
        <button className="button" type="reset">
          Reset
        </button>
        <button className="button" onClick={submitForm}>
          Thêm bến xe
        </button>
      </div>
    </div>
  );
}

export default FormAddBusStation;
