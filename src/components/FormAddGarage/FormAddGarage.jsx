import React from "react";
import axios from "axios";
import { useHistory } from "react-router";

FormAddGarage.propTypes = {};

function FormAddGarage(props) {
  const history = useHistory();

  function handleBack() {
    window.location.href = "/garage";
  }

  function submitForm() {
    let garage = document.getElementById("garage").value;
    axios
      .post("https://qlbvxk.herokuapp.com/api/garages/", {
        TenNhaXe: garage,
      })
      .then((res) => {
        if (res.data.maNhaXe) {
          let busroute = {
            maNhaXe: res.data.maNhaXe,
          };
          localStorage.setItem("garage", JSON.stringify(busroute));
          history.push("/garage");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="form-add-bus-route">
      <h3>THÊM NHÀ XE</h3>
      <div className="my-form-input">
        <form className="form">
          <div className="form-group form-add-bus-route-1">
            <h5 for="garage">Tên nhà xe</h5>
            <input type="text" class="form-control" id="garage" />
          </div>
        </form>
      </div>
      <div className="button-area button-of-add-route">
        <button className="button" onClick={handleBack}>
          Quay lại
        </button>

        <button className="button" onClick={submitForm}>
          Thêm nhà xe
        </button>
      </div>
    </div>
  );
}

export default FormAddGarage;
