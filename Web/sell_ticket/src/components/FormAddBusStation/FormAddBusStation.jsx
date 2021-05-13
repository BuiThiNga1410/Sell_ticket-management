import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";

FormAddBusStation.propTypes = {};

function FormAddBusStation(props) {
  const history = useHistory();

  function handleBack() {
    window.location.href = "/busroute/add";
  }
  function submitForm() {
    let nameOfBusStation = document.getElementById("nameOfBusStation").value;
  }
  return (
    <div className="form-add-bus-route">
      <p className="add-route-title">THÊM BẾN XE</p>
      <div className="form-input">
        <span>Tên bến xe</span>
        <br />
        <input type="text" required id="time" className="myform" />
        <br />
        <span>Địa chỉ</span>
        <br />
        <input type="text" required id="time" className="myform" />
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
