import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import "./DataBusTrip.scss";

DataBusTrip.propTypes = {};

function DataBusTrip(props) {
  const [bustrips, setBustrips] = useState([]);
  const history = useHistory();
  const numberWithCommas = (x) => {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  };
  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/bustrips")
      .then((res) => res.json())
      .then((result) => {
        setBustrips(result);
      });
  }, []);
  function handleDelete(id) {
    fetch(`https://qlbvxk.herokuapp.com/api/bustrips/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        console.warn(res);
      });
      history.push("/bustrips");
      window.location.reload();
    });
  }
  return (
    <div>
      <div className="searchForm">
        <h1 className="title-table">DANH SÁCH CHUYẾN XE</h1>

        <div className="container">
          <div className="row">
            <div className="table-list">
              <div>
                <button className="button addbusbutton editbutton">
                  <Link to="/bustrip/add" className="link-add-button my-button">
                    Thêm chuyến xe
                  </Link>
                </button>
              </div>

              <div className="table-container">
                <table className="mytable">
                  <thead>
                    <tr>
                      <th>Tên bến xe đi</th>

                      <th>Tên bến xe đến</th>

                      <th>Nhà xe</th>
                      <th>Số chỗ trống</th>
                      <th>Ngày xuất bến</th>
                      <th>Ngày đến</th>
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

                          <td data-column="nhaXe">{bustrip.nhaXe}</td>
                          <td data-column="numberOfEmplySeats">
                            {bustrip.soChoTrong}
                          </td>
                          <td>{bustrip.ngayXuatBen.split("T")[0]}</td>
                          <td>{bustrip.ngayDen.split("T")[0]}</td>
                          <td>{numberWithCommas(bustrip.donGia)}</td>
                          <td data-column="link">
                            <button
                              className="btn-delete"
                              onClick={() => handleDelete(bustrip.maChuyenXe)}
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

export default DataBusTrip;
