import React, { useEffect, useState, useRef } from "react";
import Loading from "../../shared/partials/Loading";
import ConfirmDialog from "../../shared/partials/ConfirmDialog";
import { useHistory } from "react-router-dom";
import "./DataGarage.scss";
import FormAddGarage from "../FormAddGarage/FormAddGarage";

function DataGarage(props) {
  const [garages, setGarages] = useState();
  const [isDeleted, setIsDeleted] = useState(false);
  const removeId = useRef();
  const history = useHistory();
  const [showFormAdd, setShowFormAdd] = useState(false);

  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/garages")
      .then((res) => res.json())
      .then((result) => {
        setGarages(result);
      });
  }, []);

  function handleDelete(id) {
    setIsDeleted(false);
    fetch(`https://qlbvxk.herokuapp.com/api/garages/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        console.warn(res);
      });
      history.push("/garage");
      window.location.reload();
    });
  }

  return (
    <div>
      <div className="searchForm">
        <h1 className="title-table">DANH SÁCH NHÀ XE</h1>
        <div className="container">
          <div className="button-add-garage">
            <button
              className="btn btn-primary button addbusbutton myeditbutton"
              onClick={() => setShowFormAdd(!showFormAdd)}
            >
              Thêm nhà xe
            </button>
          </div>
          {!!showFormAdd && <FormAddGarage />}
          <div className="my-row">
            <div className="table-list my-table-list">
              {!!garages && garages.length && (
                <div className="table-container">
                  <table className="mytable">
                    <thead>
                      <tr>
                        <th>Mã nhà xe</th>

                        <th>Tên nhà xe</th>
                        <th>Cập nhật</th>
                        <th>Xóa</th>
                      </tr>
                    </thead>
                    <tbody>
                      {garages.map((garage) => {
                        return (
                          <tr>
                            <td data-column="nameOfGarage">{garage.maNhaXe}</td>

                            <td data-column="nameOfCustomer">
                              {garage.tenNhaXe}
                            </td>
                            <td data-column="link">
                              <a
                                href={"/garage/update/" + garage.maNhaXe}
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
                                  removeId.current = garage.maNhaXe;
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
              {!!garages && !garages.length && (
                <div className="notFound myLabel">
                  <p className="notFound-label">Không tìm thấy dữ liệu</p>
                  <img
                    className="notFound-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuW_Gkd6eDbGQ7X3JmDZKbSX8q8TZLOPEdv-lMLjICH_OEfS4MVRDAoFP3fsvQU1lV7Ac&usqp=CAU"
                    alt="not found"
                  />
                </div>
              )}
              {!garages && <Loading />}
            </div>
          </div>
          {!garages && <Loading />}
          {!!isDeleted && (
            <ConfirmDialog
              title="Bạn có chắc chắn muốn xóa nhà xe này"
              handleConfirm={() => handleDelete(removeId.current)}
              handleCancel={() => setIsDeleted(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default DataGarage;
