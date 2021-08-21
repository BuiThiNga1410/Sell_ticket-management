import React, { useEffect, useState } from "react";
import Loading from "../../shared/partials/Loading";

 
function DataGarage(props) {
    const [garages, setGarages] = useState();

    useEffect(() => {
        fetch("https://qlbvxk.herokuapp.com/api/garages")
        .then((res) => res.json())
        .then((result) => {
        setGarages(result);
      });
    }, []);

    function handleBack() {
      window.location.href = "/garage";
    }

    return (
        <div>
      <div className="searchForm">
        <h1 className="title-table">DANH SÁCH NHÀ XE</h1>
        <div className="container">
          <div className="my-row">
            <div className="table-list my-table-list">
              {!!garages && garages.length && (
                <div className="table-container">
                  <table className="mytable">
                    <thead>
                      <tr>
                        <th>Mã nhà xe</th>

                        <th>Tên nhà xe</th>
                      </tr>
                    </thead>
                    <tbody>
                      {garages.map((garage) => {
                        return (
                          <tr>
                            <td data-column="nameOfGarage">{garage.maNhaXe}</td>

                            <td data-column="nameOfCustomer">{garage.tenNhaXe}</td>
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
        </div>
      </div>
    </div>
    );
}

export default DataGarage;