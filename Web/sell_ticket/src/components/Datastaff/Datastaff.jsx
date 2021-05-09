import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "./Datastaff.scss";
import { useState } from "react";

import Search_admin from "../Search_admin/Search_admin";
import { Link } from "react-router-dom";

Datastaff.propTypes = {};

function Datastaff(props) {
  const [employees, setEmployees] = useState([]);
  const [filters, setFilters] = useState();

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
        <div className="container">
          <div className="row">
            <Search_admin onSubmit={handleFiltersChange} />
            <div className="table-list-staff">
              <button className="button addbutton">
                <Link to="/staff/add" className="link-add-button">
                  Thêm nhân viên
                </Link>
              </button>
              <table>
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
                  {employees.map((staff) => {
                    return (
                      <tr>
                        <td data-column="Id">{staff.maNd}</td>
                        <td data-column="Name">{staff.tenNd}</td>
                        <td data-column="Address">{staff.diaChi}</td>
                        <td data-column="Phonenumber">{staff.sdt}</td>
                        <td data-column="CMND">{staff.cmnd}</td>
                        <td data-column="Username">{staff.email}</td>
                        <td data-column="link">
                          <Link to={"/staff/update/" + staff.maNd}>
                            Cập nhật
                          </Link>
                        </td>
                        <td data-column="link">
                          <Link to={"/staff/delete/" + staff.maNd}>Xóa</Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Datastaff;
