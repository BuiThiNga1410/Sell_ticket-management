import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Busroutetable.scss";

function Busroutetable(props) {
  const [busroutes, setBusRoutes] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/busroutes")
      .then((res) => res.json())
      .then((result) => {
        setBusRoutes(result);
      });
  }, []);
  function handleDelete(id) {
    fetch(`https://qlbvxk.herokuapp.com/api/busroutes/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        console.warn(res);
      });
      history.push("/busroute");
      window.location.reload();
    });
  }
  return (
    <div className="table-list">
      <div>
        <button className="button addbusroutebutton">
          <Link to="/busroute/add" className="link-add-button">
            Thêm tuyến xe
          </Link>
        </button>
      </div>

      <div className="table-container">
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
                    <a
                      href={"/busroute/update/" + busroute.maTuyenXe}
                      className="my-link"
                    >
                      Cập nhật
                    </a>
                  </td>
                  <td data-column="link">
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(busroute.maTuyenXe)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Busroutetable;
