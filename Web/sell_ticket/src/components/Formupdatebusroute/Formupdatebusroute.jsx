import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Formupdatebusroute.scss";

Formupdatebusroute.propTypes = {};

function Formupdatebusroute(props) {
  const [busroute, setBusRoute] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/busroutes/" + id)
      .then((res) => res.json())
      .then((result) => {
        setBusRoute(result);
      });
  });
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
            value={busroute.tenTuyenXe}
          />
          <br />
          <span>Điểm xuất phát:</span>
          <br />
          <input
            type="text"
            required
            name="starting-point"
            className="form-text"
            value={busroute.diaChiBxDi}
          />
          <br />
          <span>Đích đến: </span>
          <br />
          <input
            type="text"
            required
            name="destination"
            className="form-text"
            value={busroute.diaChiBxDen}
          />
          <br />
        </div>
        <div className="button-area button-of-update-route">
          <button className="button">Quay lại</button>
          <button className="button">Cập nhật</button>
        </div>
      </form>
    </div>
  );
}

export default Formupdatebusroute;
