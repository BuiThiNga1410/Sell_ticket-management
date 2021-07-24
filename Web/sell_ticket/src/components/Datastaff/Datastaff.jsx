import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "./Datastaff.scss";
import { useState } from "react";
import Search_admin from "../Search_admin/Search_admin";
import { Link, useHistory } from "react-router-dom";

Datastaff.propTypes = {};

function Datastaff(props) {
  const [employees, setEmployees] = useState([]);
  const [filters, setFilters] = useState();
  const history = useHistory();
  function handleDelete(id) {
    fetch(`https://qlbvxk.herokuapp.com/api/accounts/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        console.warn(res);
      });
      history.push("/staff");
      window.location.reload();
    });
  }
  function handleFiltersChange(newFilters) {
    console.log("New filter: ", newFilters);
    if (newFilters.searchTerm == "") {
      fetch("https://qlbvxk.herokuapp.com/api/staffs")
        .then((res) => res.json())
        .then((result) => {
          setEmployees(result);
        });
    } else {
      fetch(
        `https://qlbvxk.herokuapp.com/api/staffs/search?name=${newFilters.searchTerm}`
      )
        .then((res) => res.json())
        .then((result) => {
          setEmployees(result);
        });
    }

    setFilters({
      title_like: newFilters.searchTerm,
    });
  }
  // get all staff
  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/staffs")
      .then((res) => res.json())
      .then((result) => {
        setEmployees(result);
      });
  }, []);
  return (
    <div>
      <div className="searchForm">
        <h1 className="title-table">DANH SÁCH NHÂN VIÊN</h1>
        <div className="container-draft">
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
                  <Link
                    to="/staff/account/add"
                    className="link-add-button my-button"
                  >
                    Cấp tài khoản
                  </Link>
                </button>
              </div>
              {employees.length ? (
                <div className="table-container">
                  <table className="mytable">
                    <thead>
                      <tr>
                        <th>ID</th>

                        <th>Họ và tên</th>

                        <th>Địa chỉ</th>
                        <th>Số điện thoại</th>
                        <th>CMND</th>
                        <th>Username</th>
                        <th>Cập nhật</th>

                        <th>Xóa</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employees.map((employee) => {
                        return (
                          <tr>
                            <td data-column="id">{employee.maNd}</td>

                            <td data-column="name">{employee.tenNd}</td>

                            <td data-column="address">{employee.diaChi}</td>

                            <td data-column="sdt">{employee.sdt}</td>
                            <td data-column="cmnd">{employee.cmnd}</td>
                            <td data-column="username">{employee.email}</td>
                            <td data-column="link">
                              <a
                                href={"/staff/update/" + employee.maNd}
                                className="my-link"
                              >
                                Cập nhật
                              </a>
                            </td>
                            <td data-column="link">
                              <button
                                className="btn-delete"
                                onClick={() => handleDelete(employee.maNd)}
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

export default Datastaff;