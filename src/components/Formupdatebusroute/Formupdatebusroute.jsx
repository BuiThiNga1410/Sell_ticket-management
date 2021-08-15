import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import "./Formupdatebusroute.scss";

Formupdatebusroute.propTypes = {};

function Formupdatebusroute(props) {
  const [busRoute, setBusRoute] = useState({});
  const { id } = useParams();
  const [busStations, setBusStations] = useState([]);
  const [garages, setGarages] = useState([]);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch("https://qlbvxk.herokuapp.com/api/garages")
      .then((res) => res.json())
      .then((result) => {
        setGarages(result);
      });
  });

  function handleBack() {
    history.push("/busroute");
  }
  function submitForm() {
    let dep = document.querySelector("#dep").value;
    let dest = document.querySelector("#dest").value;
    let time = document.getElementById("time").value;
    let garage = document.querySelector("#garage").value;


    if (dep === dest) {
      alert("Không thể chọn cùng một bến xe");
    } else {
      axios
        .put("https://qlbvxk.herokuapp.com/api/busroutes/" + id, {
          MaBxden: dest,
          MaBxdi: dep,
          ThoiGianDiChuyen: time,
          maNhaXe: garage
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
        <form>
          <div className="form-group form-add-bus-route-1">
            <h5 for="dep">Điểm xuất phát</h5>
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
          </div>
          <div className="form-group form-add-bus-route-1">
            <h5 for="dest">Đích đến</h5>
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
          </div>
          <div className="form-group form-add-bus-route-1">
            <h5 for="time">Thời gian di chuyển (giờ)</h5>
            <input
              type="number"
              required
              id="time"
              defaultValue={busRoute.thoiGianDiChuyen}
              className="myform"
            />
          </div>
          <div className="form-group form-add-bus-route-1">
            <h5 for="garage">Nhà xe</h5>
            <select id="garage" className="myselect">
              {garages.map((garage) => {
                return (
                  <option
                    value={garage.maNhaXe}
                    selected={
                      busRoute.tenNhaXe &&
                        busRoute.tenNhaXe === garage.tenNhaXe
                        ? "selected"
                        : ""
                    }
                  >
                    {garage.tenNhaXe}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
      </div>
      <div className="button-area button-of-add-route">
        <button className="button" onClick={handleBack}>
          Quay lại
        </button>

        <button className="button" onClick={submitForm}>
          Cập nhật
        </button>
      </div>
    </div>
  );
}

export default Formupdatebusroute;