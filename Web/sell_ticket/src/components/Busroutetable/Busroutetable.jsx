import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Busroutetable.scss";
import data from "./dulieutuyenxe.json";

function Busroutetable(props) {
  const [busroutes, setBusRoutes] = useState([]);
  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/busroutes")
      .then((res) => res.json())
      .then((result) => {
        setBusRoutes(result);
      });
  });
  return (
    <div className="table-list">
      <button className="button addbusroutebutton">
        <Link to="/staff/bus" className="link-add-button">
          Thêm xe
        </Link>
      </button>
      <table>
        <thead>
          <tr>
            <th>Tuyến xe</th>
            <th>Điểm xuất phát</th>
            <th>Điểm đến</th>

            <th>Cập nhật</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          {busroutes.map((busroute) => {
            return (
              <tr>
                <td data-column="route">{busroute.tenTuyenXe}</td>
                <td data-column="startingpoint">
                  {busroute.diaChiBxDi.split(",")[0]}
                </td>
                <td data-column="destination">
                  {busroute.diaChiBxDen.split(",")[0]}
                </td>

                <td data-column="link">
                  <a href={"/busroute/update/" + busroute.maTuyenXe}>
                    Cập nhật
                  </a>
                </td>
                <td data-column="link">
                  <a href={"/busroute/delete/" + busroute.maTuyenXe}>Xóa</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Busroutetable;
