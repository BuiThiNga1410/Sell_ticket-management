import React, { useEffect, useRef, useState } from "react";
import Loading from "../../shared/partials/Loading";
import './DataReview.scss';
import axios from "axios";
 
function DataReview(props) {
    const [garages, setGarages] = useState([]);
    const [reviews, setReviews] = useState();

    useEffect(() => {
        fetch("https://qlbvxk.herokuapp.com/api/garages")
        .then((res) => res.json())
        .then((result) => {
        setGarages(result);
      });
    });

    useEffect(() => {
      fetch("https://qlbvxk.herokuapp.com/api/reviews/details")
      .then((res) => res.json())
      .then((result) => {
        setReviews(result);
    });
    }, []);

    const handleSearch = (e) => {
      e.preventDefault();
      let maNx = document.getElementById("nhaXe").value;
  
      
        axios
          .get(
            `https://qlbvxk.herokuapp.com/api/reviews/search?garageid=${maNx}`
          )
          .then((response) => {
            console.log(response.data);
            setReviews(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      
    };

    function handleBack() {
      window.location.href = "/review";
    }

    return (
        <div>
      <div className="searchForm">
        <h1 className="title-table">DANH SÁCH ĐÁNH GIÁ</h1>
        <div className="container">
          <div className="my-row">
            <div className="table-list my-table-list">
              <div className="my-search-form-review-total">
                <form className="my-search-form-review">
                  <div class="input-group">
                    <div class="input-group-prepend ">
                      <span class="input-group-text">
                        Nhà xe
                      </span>
                    </div>
                    <select
                      type="text"
                      id="nhaXe"
                      class="form-control my-search-form__input"
                    >
                      {garages.map((garage) => {
                        return (
                          <option key={garage.maNhaXe} value={garage.maNhaXe}>
                            {garage.tenNhaXe}
                          </option>
                        );
                      })}
                    </select>
                    <button className="btn btn-primary" onClick={handleSearch}>
                      Tìm kiếm đánh giá
                    </button>
                    <button className="btn btn-primary" onClick={handleBack}>Tất cả</button>
                  </div>
                </form>
              </div>

              {!!reviews && reviews.length && (
                <div className="table-container">
                  <table className="mytable">
                    <thead>
                      <tr>
                        <th>Tên nhà xe</th>

                        <th>Tên khách hàng</th>

                        <th>Số điện thoại khách hàng</th>
                        <th>Mức đánh giá</th>
                        <th>Nội dung đánh giá</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reviews.map((review) => {
                        return (
                          <tr>
                            <td data-column="nameOfGarage">{review.tenNhaXe}</td>

                            <td data-column="nameOfCustomer">{review.tenNd}</td>

                            <td data-column="phoneNumber">{review.sdt}</td>

                            <td data-column="start">{review.sao}</td>
                            <td data-column="content">{review.noiDungDanhGia}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
              {!!reviews && !reviews.length && (
                <div className="notFound myLabel">
                  <p className="notFound-label">Không tìm thấy dữ liệu</p>
                  <img
                    className="notFound-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuW_Gkd6eDbGQ7X3JmDZKbSX8q8TZLOPEdv-lMLjICH_OEfS4MVRDAoFP3fsvQU1lV7Ac&usqp=CAU"
                    alt="not found"
                  />
                </div>
              )}
              {!reviews && <Loading />}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default DataReview;