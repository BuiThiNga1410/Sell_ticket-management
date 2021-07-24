import React, { useEffect, useState } from "react";
import "./Bustable.scss";
import { Link, useHistory } from "react-router-dom";
Bustable.propTypes = {};

function Bustable(props) {
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

  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/buses/")
      .then((res) => res.json())
      .then((result) => {
        setBuses(result);
      });
  });

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
        });
    }

    setFilters({
      title_like: newFilters.searchTerm,
    });
  }
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
                  <a href={"/bus/update/" + bus.maXe} className="my-link">
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
  );
}

export default Bustable;