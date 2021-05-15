import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Formaddbusroute.scss";

Formaddbusroute.propTypes = {};

function Formaddbusroute(props) {
  const [busStations, setBusStations] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/busstations")
      .then((res) => res.json())
      .then((result) => {
        setBusStations(result);
      });
  });
  function handleBack() {
    window.location.href = "/busroute";
  }
  function submitForm() {
    let depId = document.querySelector("#dep").value;
    let destId = document.querySelector("#dest").value;
    let time = document.getElementById("time").value;

    if (depId == destId) {
      alert("Không thể chọn cùng một bến xe");
    } else {
      axios
        .post("https://qlbvxk.herokuapp.com/api/busroutes", {
          MaBxdi: depId,
          MaBxden: destId,
          ThoiGianDiChuyen: time,
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
      <p className="add-route-title">THÊM TUYẾN XE</p>
      <div className="my-form-input">
        <span>Điểm xuất phát:</span>
        <br />
        <select id="dep" className="myselect">
          {busStations.map((busStation) => {
            return <option value={busStation.maBx}>{busStation.tenBx}</option>;
          })}
        </select>
        <br />
        <span>Đích đến: </span>
        <br />
        <select id="dest" className="myselect">
          {busStations.map((busStation) => {
            return <option value={busStation.maBx}>{busStation.tenBx}</option>;
          })}
        </select>
        <br />
        <span>Thời gian di chuyển (giờ):</span>
        <br />
        <input type="number" required id="time" className="myform" />
        <br />
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
        <button className="button" type="reset">
          Reset
        </button>
        <button className="button" onClick={submitForm}>
          Thêm tuyến xe
        </button>
      </div>
    </div>
  );
}

export default Formaddbusroute;
