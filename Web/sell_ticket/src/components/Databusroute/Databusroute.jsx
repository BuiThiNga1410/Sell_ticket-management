import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faExchangeAlt } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Search_BusRoute from "../Search_BusRoute/Search_BusRoute";
import "./Databusroute.scss";
import ConfirmDialog from "../../shared/partials/ConfirmDialog";
import Loading from "../../shared/partials/Loading";
Databusroute.propTypes = {};

function Databusroute(props) {
  const [busroutes, setBusRoutes] = useState();
  const history = useHistory();
  const [busStations, setBusStations] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const removeId = useRef();

  useEffect(() => {
    axios
      .get("https://qlbvxk.herokuapp.com/api/busstations")
      .then((response) => {
        setBusStations(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/busroutes")
      .then((res) => res.json())
      .then((result) => {
        setBusRoutes(result);
      });
  }, []);

  function handleDelete(id) {
    setIsDeleted(false);
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

  function handleBack() {
    window.location.href = "/busroute";
  }

  const handleSearch = (e) => {
    e.preventDefault();
    let dep = document.getElementById("dep").value;
    let dest = document.getElementById("dest").value;

    if (!(dep && dest)) {
      axios
        .get("https://qlbvxk.herokuapp.com/api/busroutes")
        .then((response) => {
          console.log(response.data);
          setBusRoutes(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(
          `https://qlbvxk.herokuapp.com/api/busroutes/search?depId=${dep}&destId=${dest}`
        )
        .then((response) => {
          console.log(response.data);
          setBusRoutes(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <div className="searchForm">
        <h1 className="title-table">DANH SÁCH TUYẾN XE</h1>
        <div className="container">
          <div>
            <form className="my-search-form">
              <div class="input-group">
                <div class="input-group-prepend ">
                  <span class="input-group-text">
                    <FontAwesomeIcon icon={faMapMarker} color="blue" />
                  </span>
                </div>
                <select
                  type="text"
                  id="dep"
                  class="form-control my-search-form__input"
                >
                  {busStations.map((busStation) => {
                    return (
                      <option key={busStation.maBx} value={busStation.maBx}>
                        {busStation.tenBx}
                      </option>
                    );
                  })}
                </select>

                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <div class="search-exchange">
                      <FontAwesomeIcon icon={faExchangeAlt} color="blue" />
                      <FontAwesomeIcon icon={faMapMarker} color="blue" />
                    </div>
                  </span>
                </div>
                <select
                  type="text"
                  id="dest"
                  class="form-control my-search-form__input"
                >
                  {busStations.map((busStation) => {
                    return (
                      <option key={busStation.maBx} value={busStation.maBx}>
                        {busStation.tenBx}
                      </option>
                    );
                  })}
                </select>

                <button className="btn btn-primary" onClick={handleSearch}>
                  Tìm tuyến xe
                </button>
                <button className="btn btn-primary" onClick={handleBack}>
                  Quay lại
                </button>
              </div>
            </form>
          </div>
          <div className="table-list">
            <div>
              <button className="button addbusroutebutton btn btn-primary">
                <Link to="/busroute/add" className="link-add-button">
                  Thêm tuyến xe
                </Link>
              </button>
            </div>
            {!!busroutes && busroutes.length && (
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
                              onClick={() => {
                                setIsDeleted(true);
                                removeId.current = busroute.maTuyenXe;
                              }}
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
            )}
            {!!busroutes && !busroutes.length && (
              <div className="notFound">
                <p className="notFound-label">Không tìm thấy dữ liệu</p>
                <img
                  className="notFound-img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuW_Gkd6eDbGQ7X3JmDZKbSX8q8TZLOPEdv-lMLjICH_OEfS4MVRDAoFP3fsvQU1lV7Ac&usqp=CAU"
                  alt="not found"
                />
              </div>
            )}
          </div>
          {!busroutes && <Loading />}
          {!!isDeleted && (
            <ConfirmDialog
              title="Bạn có chắc chắn muốn xóa tuyến xe này"
              handleConfirm={() => handleDelete(removeId.current)}
              handleCancel={() => setIsDeleted(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Databusroute;