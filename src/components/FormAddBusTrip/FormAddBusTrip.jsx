import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./FormAddBusTrip.scss";
import axios from "axios";

function FormAddBusTrip(props) {
  const [busroutes, setBusRoutes] = useState([]);
  const [buses, setBuses] = useState([]);
  const history = useHistory();
  const [busRouteId, setBusRouteId] = useState();
  const [schedule, setSchedule] = useState([]);

  function handleChange(e) {
    setBusRouteId(e.target.value);
  }

  function handleChangeCheckbox(e) {
    var temp = [...schedule];
    if (e.target.checked) {
      temp.push(e.target.value);
      setSchedule(temp);
    } else {
      temp.pop(e.target.value);
      setSchedule(temp);
    }
  }

  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/busroutes")
      .then((res) => res.json())
      .then((result) => {
        setBusRoutes(result);
      });
  }, []);

  useEffect(() => {
    fetch(`https://qlbvxk.herokuapp.com/api/buses/busroute?id=${busRouteId}`)
      .then((res) => res.json())
      .then((result) => {
        setBuses(result);
      });
  }, [busRouteId]);

  function handleBack() {
    window.location.href = "/bustrip";
  }
  function submitForm() {
    let busRouteId = document.querySelector("#busroute").value;
    let busId = document.querySelector("#bus").value;
    let time = document.getElementById("time").value;
    let schedule_trip = schedule.join("");
    let price = document.getElementById("price").value;
    axios
      .post("https://qlbvxk.herokuapp.com/api/bustrips", {
        MaTuyenXe: busRouteId,
        MaXe: busId,
        GioXuatBen: time,
        LichTrinh: schedule_trip,
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
          <select
            className="form-text myselect"
            id="busroute"
            onChange={handleChange}
            value={busRouteId}
          >
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
          <h5>Biển số xe</h5>
          <select className="form-text myselect" id="bus">
            {!!buses?.length
              ? buses.map((bus) => {
                  return <option value={bus.maXe}>{bus.bienSoXe}</option>;
                })
              : null}
          </select>
        </div>
        <div className="form-item">
          <h5>Giờ xuất bến</h5>
          <select id="time" className="myselect">
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
        <div className="form-item">
          <h5>Đơn giá</h5>
          <input className="price form-text" type="number" id="price" />
        </div>
        <div className="form-item">
          <h5>Lịch trình</h5>
          <div className="my-checkbox">
            <div className="half-column">
              <div>
                <input
                  type="checkbox"
                  id="schedule"
                  className="checkbox-item"
                  value="0"
                  onChange={handleChangeCheckbox}
                />
                <label for="sunday"> Chủ nhật</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="schedule"
                  className="checkbox-item"
                  value="1"
                  onChange={handleChangeCheckbox}
                />
                <label for="monday"> Thứ 2</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="schedule"
                  className="checkbox-item"
                  value="2"
                  onChange={handleChangeCheckbox}
                />
                <label for="tuesday"> Thứ 3</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="schedule"
                  className="checkbox-item"
                  value="3"
                  onChange={handleChangeCheckbox}
                />
                <label for="wednesday"> Thứ 4</label>
              </div>
            </div>
            <div className="half-column">
              <div>
                <input
                  type="checkbox"
                  id="schedule"
                  className="checkbox-item"
                  value="4"
                  onChange={handleChangeCheckbox}
                />
                <label for="thursday"> Thứ 5</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="schedule"
                  className="checkbox-item"
                  value="5"
                  onChange={handleChangeCheckbox}
                />
                <label for="friday"> Thứ 6</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="schedule"
                  className="checkbox-item"
                  value="6"
                  onChange={handleChangeCheckbox}
                />
                <label for="saturday"> Thứ 7</label>
              </div>
            </div>
          </div>
        </div>
        <div className="mybutton buttonarea">
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
