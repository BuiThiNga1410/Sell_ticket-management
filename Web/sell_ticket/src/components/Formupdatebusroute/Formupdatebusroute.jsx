import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import "./Formupdatebusroute.scss";

Formupdatebusroute.propTypes = {};

function Formupdatebusroute(props) {
  const [busroute, setBusRoute] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/busroutes/" + id)
      .then((res) => res.json())
      .then((result) => {
        setBusRoute(result);
      });
  });
  function handleBack() {
    history.push("/busroute");
  }
  return (
    <div className="form-update-bus-route">
      <form method="post" className="formUpdateBusRoute">
        <p className="update-route-title">CẬP NHẬT TUYẾN XE</p>
        <div className="form-input">
          <span>Tên tuyến xe:</span>
          <br />
          <input
            type="text"
            required
            name="name-of-route"
            className="form-text"
            defaultValue={busroute.tenTuyenXe}
          />
          <br />
          <span>Điểm xuất phát:</span>
          <br />
          <input
            type="text"
            required
            name="starting-point"
            className="form-text"
            defaultValue={busroute.diaChiBxDi}
          />
          <br />
          <span>Đích đến: </span>
          <br />
          <input
            type="text"
            required
            name="destination"
            className="form-text"
            defaultValue={busroute.diaChiBxDen}
          />
          <br />
        </div>
        <div className="button-area button-of-update-route">
          <button className="button" onClick={handleBack}>
            Quay lại
          </button>
          <button className="button">Cập nhật</button>
        </div>
      </form>
    </div>
  );
}

export default Formupdatebusroute;
