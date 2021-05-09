import React, { useEffect, useState } from "react";
import "./Bustable.scss";
import { Link } from "react-router-dom";
Bustable.propTypes = {};

function Bustable(props) {
  const [buses, setBuses] = useState([]);
  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/buses/")
      .then((res) => res.json())
      .then((result) => {
        setBuses(result);
      });
  });
  return (
    <div className="table-list">
      <button className="button addbusbutton">
        <Link to="/bus/add" className="link-add-button my-button">
          Thêm xe
        </Link>
      </button>
      <table>
        <thead>
          <tr>
            <th>Chủ xe</th>
            <th>SĐT</th>

            <th>Số chỗ</th>

            <th>Biển số xe</th>
            <th>Cập nhật</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          {buses.map((bus) => {
            return (
              <tr>
                <td data-column="bus-owner">{bus.tenNv}</td>
                <td data-column="phone-number">{bus.sdt}</td>

                <td data-column="number-of-seats">{bus.soChoNgoi}</td>

                <td data-column="number-plate">{bus.bienSoXe}</td>
                <td data-column="link">
                  <a href={"/bus/update/" + bus.maXe}>Cập nhật</a>
                </td>
                <td data-column="link">
                  <a href={"/bus/delete/" + bus.maXe}>Xóa</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Bustable;
