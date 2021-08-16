import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Formaddbusroute.scss";

Formaddbusroute.propTypes = {};

function Formaddbusroute(props) {
  const [busStations, setBusStations] = useState([]);
  const [garages, setGarages] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/busstations")
      .then((res) => res.json())
      .then((result) => {
        setBusStations(result);
      });
  });
  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/garages")
      .then((res) => res.json())
      .then((result) => {
        setGarages(result);
      });
  });
  function handleBack() {
    window.location.href = "/busroute";
  }
  function submitForm() {
    let depId = document.querySelector("#dep").value;
    let destId = document.querySelector("#dest").value;
    let time = document.getElementById("time").value;
    let garage = document.querySelector("#garage").value;

    if (depId === destId) {
      alert("Không thể chọn cùng một bến xe");
    } else {
      axios
        .post("https://qlbvxk.herokuapp.com/api/busroutes", {
          MaBxdi: depId,
          MaBxden: destId,
          ThoiGianDiChuyen: time,
          maNhaXe: garage
        })
        .then((res) => {
          if (res.data.maTuyenXe) {
            let busroute = {
              maTuyenXe: res.data.maTuyenXe,
            };
            localStorage.setItem("busroute", JSON.stringify(busroute));
            history.push("/busroute");
            window.location.reload();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  return (
    <div className="form-add-bus-route">
      <h3>THÊM TUYẾN XE</h3>
      <div className="my-form-input">
        <form className="form">
          <div className="form-group form-add-bus-route-1">
            <h5 for="dep">Điểm xuất phát</h5>
            <select id="dep" className="myselect">
              {busStations.map((busStation) => {
                return <option value={busStation.maBx}>{busStation.tenBx}</option>;
              })}
            </select>
          </div>
          <div className="form-group form-add-bus-route-1">
            <h5 for="dest">Đích đến</h5>
            <select id="dest" className="myselect">
              {busStations.map((busStation) => {
                return <option value={busStation.maBx}>{busStation.tenBx}</option>;
              })}
            </select>
          </div>
          <div className="form-group form-add-bus-route-1">
            <h5 for="time">Thời gian di chuyển (giờ)</h5>
            <input type="text" class="form-control" id="time" />
          </div>
          <div className="form-group form-add-bus-route-1">
            <h5 for="garage">Nhà xe</h5>
            <select id="garage" className="myselect">
              {garages.map((garage) => {
                return <option value={garage.maNhaXe}>{garage.tenNhaXe}</option>;
              })}
            </select>
          </div>
        </form>
      </div>
      <div>
        <p className="mypara">
          <b>Lưu ý</b> Nếu bến xe chưa tồn tại, bạn có thể thêm bến xe mới{" "}
          <a href="/busstation/add">tại đây</a>
        </p>
      </div>
      <div className="button-area button-of-add-route">
        <button className="button" onClick={handleBack}>
          Quay lại
        </button>

        <button className="button" onClick={submitForm}>
          Thêm tuyến xe
        </button>
      </div>
    </div>
  );
}

export default Formaddbusroute;