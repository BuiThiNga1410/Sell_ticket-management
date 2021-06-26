import React from "react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Search from "../Search";
import Search_admin from "../Search_admin/Search_admin";
import "./Databus.scss";
Databus.propTypes = {};

function Databus(props) {
  const [buses, setBuses] = useState([]);
  const history = useHistory();
  const [filters, setFilters] = useState();
  function handleDelete(id) {
    fetch(`https://qlbvxk.herokuapp.com/api/buses/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        console.warn(res);
      });
      history.push("/bus");
      window.location.reload();
    });
  }

  function handleFiltersChange(newFilters) {
    console.log("New filter: ", newFilters);
    if (newFilters.searchTerm == "") {
      fetch("https://qlbvxk.herokuapp.com/api/buses/")
        .then((res) => res.json())
        .then((result) => {
          setBuses(result);
        });
    } else {
      fetch(
        `https://qlbvxk.herokuapp.com/api/buses/search?name=${newFilters.searchTerm}`
      )
        .then((res) => res.json())
        .then((result) => {
          setBuses(result);
          console.log(result);
        });
    }
    setFilters({
      title_like: newFilters.searchTerm,
    });
  }

  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/buses/")
      .then((res) => res.json())
      .then((result) => {
        setBuses(result);
      });
  }, []);
  return (
    <div>
      <div className="searchForm">
        <h1 className="title-table">DANH SÁCH XE</h1>
        <div className="container">
          <div className="my-row">
            <div className="table-list my-table-list">
              <div>
                <Search_admin
                  className="edit-search"
                  onSubmit={handleFiltersChange}
                />
              </div>
              <div>
                <button className="btn btn-primary button addbusbutton myeditbutton">
                  <Link to="/bustrip/add" className="link-add-button my-button">
                    Thêm xe
                  </Link>
                </button>
              </div>
              {buses.length ? (
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

                            <td data-column="nhaxe">{bus.nhaXe}</td>

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
                                onClick={() => handleDelete(bus.maXe)}
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
              ) : (
                <div className="notFound myLabel">
                  <p className="notFound-label">Không tìm thấy dữ liệu</p>
                  <img
                    className="notFound-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuW_Gkd6eDbGQ7X3JmDZKbSX8q8TZLOPEdv-lMLjICH_OEfS4MVRDAoFP3fsvQU1lV7Ac&usqp=CAU"
                    alt="not found"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Databus;