import React, { useEffect, useRef } from "react";

import "./Datastaff.scss";
import { useState } from "react";
import SearchAdmin from "../Search_admin/SearchAdmin";
import { Link, useHistory } from "react-router-dom";
import ConfirmDialog from "../../shared/partials/ConfirmDialog";
import Loading from "../../shared/partials/Loading";

Datastaff.propTypes = {};

function Datastaff(props) {
  const [employees, setEmployees] = useState();
  const history = useHistory();
  const [isDeleted, setIsDeleted] = useState(false);
  const removeId = useRef();

  function handleDelete(id) {
    setIsDeleted(false);
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
    if (newFilters.searchTerm === "") {
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
                <SearchAdmin
                  className="edit-search"
                  onSubmit={handleFiltersChange}
                />
              </div>
              <div>
                <button className="btn btn-primary button addaccountbutton myeditbutton">
                  <Link
                    to="/staff/account/add"
                    className="link-add-button my-button"
                  >
                    Cấp tài khoản
                  </Link>
                </button>
              </div>
              {!!employees && employees.length && (
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
                                onClick={() => {
                                  setIsDeleted(true);
                                  removeId.current = employee.maNd;
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
              {!!employees && !employees.length && (
                <div className="notFound myLabel">
                  <p className="notFound-label">Không tìm thấy dữ liệu</p>
                  <img
                    className="notFound-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuW_Gkd6eDbGQ7X3JmDZKbSX8q8TZLOPEdv-lMLjICH_OEfS4MVRDAoFP3fsvQU1lV7Ac&usqp=CAU"
                    alt="not found"
                  />
                </div>
              )}
              {!employees && <Loading />}
            </div>
            {!!isDeleted && (
              <ConfirmDialog
                title="Bạn có chắc chắn muốn xóa nhân viên này"
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

export default Datastaff;