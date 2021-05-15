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
        <div className="container">
          <div className="row">
            <Search_admin onSubmit={handleFiltersChange} />
            <div className="table-list-staff">
              <button className="button addbutton">
                <Link to="/staff/account/add" className="link-add-button">
                  Cấp tài khoản
                </Link>
              </button>
              <div className="table-container">
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
                            <a
                              href={"/staff/update/" + staff.maNd}
                              className="my-link"
                            >
                              Cập nhật
                            </a>
                          </td>
                          <td data-column="link">
                            <button
                              className="btn-delete"
                              onClick={() => handleDelete(staff.maNd)}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Datastaff;
