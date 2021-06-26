import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./DataRevenues.scss";
DataRevenues.propTypes = {};

function DataRevenues(props) {
  const [allRevenues, setAllRevenues] = useState([]);
  const [isDay, setDay] = useState(true);
  var days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(i);
  }

  var months = [];
  for (let i = 1; i <= 12; i++) {
    months.push(i);
  }

  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/revenues")
      .then((res) => res.json())
      .then((result) => {
        setAllRevenues(result);
        console.log(allRevenues);
      });
  }, []);

  const numberWithCommas = (x) => {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  };

  function handleSubmit(e) {
    e.preventDefault();
    const day = document.querySelector("#day").value;
    const month = document.querySelector("#month").value;
    const year = document.getElementById("year").value;
    const myMonth = year + "-" + month;
    const myDate =
      year + "-" + `0${month}`.slice(-2) + "-" + `0${day}`.slice(-2);
    if (
      (day && !month && !year) ||
      (day && month && !year) ||
      (month && !year) ||
      (day && !month && year)
    ) {
      window.alert("Please check value of day, month or year");
    } else if (day && month && year) {
      fetch(`https://qlbvxk.herokuapp.com/api/revenues/date?date=${myDate}`)
        .then((res) => res.json())
        .then((result) => {
          setAllRevenues(result);
          console.log(allRevenues);
        });
    } else if (!day && month && year) {
      fetch(`https://qlbvxk.herokuapp.com/api/revenues/month?month=${myMonth}`)
        .then((res) => res.json())
        .then((result) => {
          setAllRevenues(result);
          console.log(allRevenues);
        });
    } else if (!day && !month && year) {
      setDay(false);
      fetch(`https://qlbvxk.herokuapp.com/api/revenues/year?year=${year}`)
        .then((res) => res.json())
        .then((result) => {
          setAllRevenues(result);
          console.log(allRevenues);
        });
    } else {
      fetch("https://qlbvxk.herokuapp.com/api/revenues")
        .then((res) => res.json())
        .then((result) => {
          setAllRevenues(result);
        });
    }
  }
  return (
    <div>
      <div className="searchForm">
        <h1 className="title-table">BÁO CÁO DOANH THU</h1>
        <div className="container">
          <div>
            <form className="my-search-form-2">
              <div className="input-group">
                <span className="input-group-text">Ngày: </span>
                <select
                  type="text"
                  id="day"
                  className="form-control my-search-form__input"
                >
                  <option key="" value=""></option>
                  {days.map((day) => {
                    return (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="input-group">
                <span className="input-group-text">Tháng: </span>
                <select
                  type="text"
                  id="month"
                  className="form-control my-search-form__input"
                >
                  <option key="" value=""></option>
                  {months.map((month) => {
                    return (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="input-group">
                <span className="input-group-text">Năm: </span>
                <input
                  type="text"
                  id="year"
                  className="form-control my-search-form__input"
                />
              </div>
              <button
                className="btn btn-primary button-revenues"
                onClick={handleSubmit}
              >
                Tìm kiếm
              </button>
            </form>
          </div>
          {allRevenues.length ? (
            <div className="table-container">
              <table className="mytable1">
                <thead>
                  <tr>
                    {isDay && <th>Ngày</th>}
                    {!isDay && <th>Tháng</th>}
                    <th>Doanh thu</th>
                    <th>Số vé</th>
                    <th>Ghi chú</th>
                  </tr>
                </thead>
                <tbody>
                  {allRevenues.map((revenues) => {
                    return (
                      <tr>
                        {isDay && (
                          <>
                            <td data-column="id">
                              {revenues.ngay.split("T")[0]}
                            </td>
                            <td data-column="id">
                              {numberWithCommas(revenues.tongDoanhThu)}
                            </td>
                          </>
                        )}
                        {!isDay && (
                          <>
                            <td data-column="id">{revenues.thang}</td>
                            <td data-column="id">{revenues.doanhThu}</td>
                          </>
                        )}
                        <td data-column="">{revenues.soVe}</td>
                        <td data-column="">{revenues.ghiChu}</td>
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
  );
}

export default DataRevenues;