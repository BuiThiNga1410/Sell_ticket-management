import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import "./Formupdatebusroute.scss";

Formupdatebusroute.propTypes = {};

function Formupdatebusroute(props) {
  const [busRoute, setBusRoute] = useState({});
  const { id } = useParams();
  const [busStations, setBusStations] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/busstations")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setBusStations(result);
        console.log("bus station", busStations);
      })
      .then((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    fetch(`https://qlbvxk.herokuapp.com/api/busroutes/${id}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setBusRoute(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  function handleBack() {
    history.push("/busroute");
  }
  function submitForm() {
    let dep = document.querySelector("#dep").value;
    let dest = document.querySelector("#dest").value;
    let time = document.getElementById("time").value;
    if (dep == dest) {
      alert("Không thể chọn cùng một bến xe");
    } else {
      axios
        .put("https://qlbvxk.herokuapp.com/api/busroutes/" + id, {
          MaBxden: dest,
          MaBxdi: dep,
          ThoiGianDiChuyen: time,
        })
        .then((res) => {
          let busroute = {
            maTuyenXe: res.data.maTuyenXe,
          };
          localStorage.setItem("busroute", JSON.stringify(busroute));
          history.push("/busroute");
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  return (
    <div className="form-add-bus-route">
      <h1 className="add-route-title">CẬP NHẬT TUYẾN XE</h1>
      <div className="my-form-input">
        <span>Điểm xuất phát:</span>
        <br />
        <select id="dep" className="myselect">
          {busStations.map((busStation) => {
            return (
              <option
                value={busStation.maBx}
                selected={
                  busRoute.tenTuyenXe &&
                  busRoute.tenTuyenXe.split(" - ")[0] === busStation.tenBx
                    ? "selected"
                    : ""
                }
              >
                {busStation.tenBx}
              </option>
            );
          })}
        </select>
        <br />
        <span>Đích đến: </span>
        <br />
        <select id="dest" className="myselect">
          {busStations.map((busStation) => {
            return (
              <option
                value={busStation.maBx}
                selected={
                  busRoute.tenTuyenXe &&
                  busRoute.tenTuyenXe.split(" - ")[1] === busStation.tenBx
                    ? "selected"
                    : ""
                }
              >
                {busStation.tenBx}
              </option>
            );
          })}
        </select>
        <br />
        <span>Thời gian di chuyển (giờ):</span>
        <br />
        <input
          type="number"
          required
          id="time"
          defaultValue={busRoute.thoiGianDiChuyen}
          className="myform"
        />
        <br />
      </div>
      <div className="button-area button-of-add-route">
        <button className="button" onClick={handleBack}>
          Quay lại
        </button>
        <button className="button" type="reset">
          Reset
        </button>
        <button className="button" onClick={submitForm}>
          Cập nhật
        </button>
      </div>
    </div>
  );
}

export default Formupdatebusroute;