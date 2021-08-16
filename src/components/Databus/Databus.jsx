import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConfirmDialog from "../../shared/partials/ConfirmDialog";
import Loading from "../../shared/partials/Loading";
import axios from "axios";

import "./Databus.scss";
Databus.propTypes = {};

function Databus(props) {
  const [buses, setBuses] = useState();
  const [isDeleted, setIsDeleted] = useState(false);
  const removeId = useRef();
  const [garages, setGarages] = useState([]);

  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/garages")
      .then((res) => res.json())
      .then((result) => {
        setGarages(result);
      });
  });

  function handleDelete(id) {
    setIsDeleted(false);
    fetch(`https://qlbvxk.herokuapp.com/api/buses/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        console.warn(res);
      });

      window.location.reload();
    });
  }

  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/buses/")
      .then((res) => res.json())
      .then((result) => {
        setBuses(result);
      });
  }, []);

  function handleBack() {
    window.location.href = "/bus";
  }

  const handleSearch = (e) => {
    e.preventDefault();
    let maNx = document.getElementById("nhaXe").value;

    if (!(maNx)) {
      axios
        .get("https://qlbvxk.herokuapp.com/api/buses")
        .then((response) => {
          console.log(response.data);
          setBuses(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(
          `https://qlbvxk.herokuapp.com/api/buses/garage?garageid=${maNx}`
        )
        .then((response) => {
          console.log(response.data);
          setBuses(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };


  return (
    <div>
      <div className="searchForm">
        <h1 className="title-table">DANH SÁCH XE</h1>
        <div className="container">
          <div className="my-row">
            <div className="table-list my-table-list">
              <div>
                <form className="my-search-form-bus">
                  <div class="input-group">
                    <div class="input-group-prepend ">
                      <span class="input-group-text">
                        Nhà xe
                      </span>
                    </div>
                    <select
                      type="text"
                      id="nhaXe"
                      class="form-control my-search-form__input"
                    >
                      {garages.map((garage) => {
                        return (
                          <option key={garage.maNhaXe} value={garage.maNhaXe}>
                            {garage.tenNhaXe}
                          </option>
                        );
                      })}
                    </select>


                    <button className="btn btn-primary" onClick={handleSearch}>
                      Tìm xe
                    </button>
                    <button className="btn btn-primary" onClick={handleBack}>Tất cả</button>
                  </div>
                </form>
              </div>

              <div>
                <button className="btn btn-primary button addbusbutton myeditbutton">
                  <Link to="/bus/add" className="link-add-button my-button">
                    Thêm xe
                  </Link>
                </button>
              </div>

              {!!buses && buses.length && (
                <div className="table-container">
                  <table className="mytable">
                    <thead>
                      <tr>
                        <th>Biển số xe</th>

                        <th>Nhà xe</th>

                        <th>Tên nhân viên</th>
                        <th>Số điện thoại</th>
                        <th>Số chỗ ngồi</th>

                        <th>Cập nhật</th>

                        <th>Xóa</th>
                      </tr>
                    </thead>
                    <tbody>
                      {buses.map((bus) => {
                        return (
                          <tr>
                            <td data-column="numberplate">{bus.bienSoXe}</td>

                            <td data-column="nhaxe">{bus.tenNhaXe}</td>

                            <td data-column="tennv">{bus.tenNv}</td>

                            <td data-column="sdt">{bus.sdt}</td>
                            <td data-column="sochongoi">{bus.soChoNgoi}</td>
                            <td data-column="link">
                              <a
                                href={"/bus/update/" + bus.maXe}
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
                                  removeId.current = bus.maXe;
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
              {!!buses && !buses.length && (
                <div className="notFound myLabel">
                  <p className="notFound-label">Không tìm thấy dữ liệu</p>
                  <img
                    className="notFound-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuW_Gkd6eDbGQ7X3JmDZKbSX8q8TZLOPEdv-lMLjICH_OEfS4MVRDAoFP3fsvQU1lV7Ac&usqp=CAU"
                    alt="not found"
                  />
                </div>
              )}
              {!buses && <Loading />}
            </div>
          </div>
          {!!isDeleted && (
            <ConfirmDialog
              title="Bạn có chắc chắn muốn xóa xe này"
              handleConfirm={() => handleDelete(removeId.current)}
              handleCancel={() => setIsDeleted(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Databus;