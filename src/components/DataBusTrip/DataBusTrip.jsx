import React, { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faExchangeAlt } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import "./DataBusTrip.scss";
import ConfirmDialog from "../../shared/partials/ConfirmDialog";
import Loading from "../../shared/partials/Loading";

DataBusTrip.propTypes = {};

function DataBusTrip(props) {
  const [bustrips, setBustrips] = useState();

  const [busStations, setBusStations] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const removeId = useRef();

  const numberWithCommas = (x) => {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  };

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
    fetch("https://qlbvxk.herokuapp.com/api/bustrips")
      .then((res) => res.json())
      .then((result) => {
        setBustrips(result);
      });
  }, []);

  function handleDelete(id) {
    setIsDeleted(false);
    fetch(`https://qlbvxk.herokuapp.com/api/bustrips/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        console.warn(res);
      });
      window.location.reload();
    });
  }

  const handleSearch = (e) => {
    e.preventDefault();
    let benxeDi = document.getElementById("dep").value;
    let benxeDen = document.getElementById("dest").value;
    let date = document.getElementById("date").value;

    if (!(benxeDi && benxeDen && date)) {
      axios
        .get("https://qlbvxk.herokuapp.com/api/bustrips")
        .then((response) => {
          console.log(response.data);
          setBustrips(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(
          `https://qlbvxk.herokuapp.com/api/bustrips/search?dep=${benxeDi}&dest=${benxeDen}&date=${date}`
        )
        .then((response) => {
          setBustrips(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <div className="searchForm">
        <h1 className="title-table">DANH SÁCH CHUYẾN XE</h1>
        <div className="my-container">
          <div className="my-row">
            <div className="table-list my-table-list">
              <div className="my-search-bar">
                <form className="my-search-form-1">
                  <div class="input-group">
                    <div class="input-group-prepend ">
                      <span class="input-group-text my-span">
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
                      <span class="input-group-text my-span">
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
                    <input
                      className="form-control search-form__input my_date_input"
                      type="date"
                      id="date"
                    />
                    <button
                      className="btn btn-primary button-in-bustrip"
                      onClick={handleSearch}
                    >
                      Tìm chuyến xe
                    </button>
                    <button className="btn btn-primary button-in-bustrip">
                      Tất cả
                    </button>
                  </div>
                </form>
              </div>

              {!!bustrips && bustrips.length && (
                <div className="table-container-trip">
                  <table className="mytablebustrip">
                    <thead>
                      <tr>
                        <th>Tên bến xe đi</th>

                        <th>Tên bến xe đến</th>

                        <th>Nhà xe</th>
                        <th>Số chỗ ngồi</th>
                        <th>Ngày/giờ xuất bến - Số chỗ trống</th>
                        <th>Thời gian</th>
                        <th>Đơn giá</th>
                        <th>Xóa</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bustrips.map((bustrip) => {
                        return (
                          <tr>
                            <td data-column="dep">{bustrip.tenBxDi}</td>

                            <td data-column="dest">{bustrip.tenBxDen}</td>

                            <td data-column="nhaXe">{bustrip.tenNhaXe}</td>
                            <td data-column="numberOfSeats">
                              {bustrip.soChoNgoi}
                            </td>
                            <td>
                              {!!bustrip.ngayXuatBen?.length
                                ? bustrip.ngayXuatBen.map((ngay) => {
                                    return (
                                      <tr data-column="days" className="my-tr">
                                        <td>
                                          Ngày:{" "}
                                          {ngay.split(" | ")[0].split("T")[0]}
                                        </td>
                                        <td>
                                          Giờ:{" "}
                                          {ngay.split(" | ")[0].split("T")[1]}
                                        </td>
                                        <td>
                                          Số chỗ trống: {ngay.split(" | ")[1]}
                                        </td>
                                      </tr>
                                    );
                                  })
                                : bustrip.gioXuatBen}
                            </td>
                            <td>{bustrip.thoiGianDiChuyen} giờ</td>
                            <td>{numberWithCommas(bustrip.donGia)}</td>
                            <td data-column="link">
                              <button
                                className="btn-delete"
                                onClick={() => {
                                  setIsDeleted(true);
                                  removeId.current = bustrip.maChuyenXe;
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
              {!!bustrips && !bustrips.length && (
                <div className="notFound">
                  <p className="notFound-label">Không tìm thấy dữ liệu</p>
                  <img
                    className="notFound-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuW_Gkd6eDbGQ7X3JmDZKbSX8q8TZLOPEdv-lMLjICH_OEfS4MVRDAoFP3fsvQU1lV7Ac&usqp=CAU"
                    alt="not found"
                  />
                </div>
              )}
              {!bustrips && <Loading />}
            </div>
            {!!isDeleted && (
              <ConfirmDialog
                title="Bạn có chắc chắn muốn xóa chuyến xe này"
                handleConfirm={() => handleDelete(removeId.current)}
                handleCancel={() => setIsDeleted(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataBusTrip;
