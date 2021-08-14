import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./FormAddBusTrip.scss";
import axios from "axios";

function FormAddBusTrip(props) {
  const [busroutes, setBusRoutes] = useState([]);
  const [buses, setBuses] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/busroutes")
      .then((res) => res.json())
      .then((result) => {
        setBusRoutes(result);
      });
  }, []);
  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/buses/")
      .then((res) => res.json())
      .then((result) => {
        setBuses(result);
      });
  }, []);
  function handleBack() {
    window.location.href = "/bustrip";
  }
  function submitForm() {
    let busRouteId = document.querySelector("#busroute").value;
    let busId = document.querySelector("#bus").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let numberOfSeats = document.getElementById("numberOfSeats").value;
    let price = document.getElementById("price").value;
    let datetime = date + "T" + time;
    axios
      .post("https://qlbvxk.herokuapp.com/api/bustrips", {
        MaTuyenXe: busRouteId,
        MaXe: busId,
        NgayXuatBen: datetime,
        SoChoDaDat: numberOfSeats,
        DonGia: price,
      })
      .then((res) => {
        if (res.data.maChuyenXe) {
          let bustrip = {
            maChuyenXe: res.data.maChuyenXe,
          };

          localStorage.setItem("bustrip", JSON.stringify(bustrip));
          history.push("/bustrip");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(datetime);
        console.log(busRouteId);
        console.log(busId);
        console.log(price);
      });
  }
  return (
    <div className="form-container">
      <div className="form-add-bus-trip">
        <h3>THÊM CHUYẾN XE</h3>
        <div className="form-item">
          <h5>Tuyến xe</h5>
          <select className="form-text myselect" id="busroute">
            {busroutes.map((busroute) => {
              return (
                <option value={busroute.maTuyenXe}>
                  {busroute.tenTuyenXe}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-item">
          <h5>Nhà xe - Biển số</h5>
          <select className="form-text myselect" id="bus">
            {buses.map((bus) => {
              return (
                <option value={bus.maXe}>
                  {bus.nhaXe} - {bus.bienSoXe}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-item datetime">
          <div className="date">
            <h5>Ngày xuất bến</h5>
            <input type="date" id="date" className="mydate" />
          </div>
          <div className="time">
            <h5>Giờ xuất bến</h5>
            <select id="time" className="mytime">
              <option value="00:00:00">00:00</option>
              <option value="01:00:00">01:00</option>
              <option value="02:00:00">02:00</option>
              <option value="03:00:00">03:00</option>
              <option value="04:00:00">04:00</option>
              <option value="05:00:00">05:00</option>
              <option value="06:00:00">06:00</option>
              <option value="07:00:00">07:00</option>
              <option value="08:00:00">08:00</option>
              <option value="09:00:00">09:00</option>
              <option value="10:00:00">10:00</option>
              <option value="11:00:00">11:00</option>
              <option value="12:00:00">12:00</option>
              <option value="13:00:00">13:00</option>
              <option value="14:00:00">14:00</option>
              <option value="15:00:00">15:00</option>
              <option value="16:00:00">16:00</option>
              <option value="17:00:00">17:00</option>
              <option value="18:00:00">18:00</option>
              <option value="19:00:00">19:00</option>
              <option value="20:00:00">20:00</option>
              <option value="21:00:00">21:00</option>
              <option value="22:00:00">22:00</option>
              <option value="23:00:00">23:00</option>
              <option value="24:00:00">24:00</option>
            </select>
          </div>
        </div>
        <div className="form-item seat-and-price">
          <div className="seats">
            <h5>Số chỗ đã đặt</h5>
            <input
              className="numberOfSeats form-text"
              type="number"
              id="numberOfSeats"
            />
          </div>
          <div className="price">
            <h5>Đơn giá</h5>
            <input className="price form-text" type="number" id="price" />
          </div>
        </div>
        <div className="mybutton">
          <button className="button" onClick={handleBack} type="button">
            Quay lại
          </button>

          <button className="button" type="submit" onClick={submitForm}>
            Thêm chuyến xe
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormAddBusTrip;