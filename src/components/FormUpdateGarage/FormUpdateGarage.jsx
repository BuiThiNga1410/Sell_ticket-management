import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

FormUpdateGarage.propTypes = {};

function FormUpdateGarage(props) {
  const [garage, setGarage] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`https://qlbvxk.herokuapp.com/api/garages/${id}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setGarage(result);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleBack() {
    window.location.href = "/garage";
  }

  function submitForm() {
    let garage = document.getElementById("garage").value;
    axios
      .put("https://qlbvxk.herokuapp.com/api/garages/" + id, {
        TenNhaXe: garage,
      })
      .then((res) => {
        history.push("/garage");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <div className="form-add-bus-route">
        <h1 className="add-route-title">CẬP NHẬT NHÀ XE</h1>
        <div className="my-form-input">
          <form className="form">
            <div className="form-group form-add-bus-route-1">
              <h5 for="nameOfGarage">Tên nhà xe</h5>
              <input
                type="text"
                required
                id="garage"
                defaultValue={garage.tenNhaXe}
                className="myform"
              />
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
    </div>
  );
}

export default FormUpdateGarage;
