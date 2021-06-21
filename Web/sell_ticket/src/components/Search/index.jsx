import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import "./Search.scss";
import myaxios from "../../app/api";
import { useHistory } from "react-router";

Search.propTypes = {};

function Search(props) {
  const [busStations, setBusStations] = useState([]);
  const history = useHistory();
  useEffect(() => {
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;
    document.getElementById("date").value = today;
    myaxios
      .get("/busstations")
      .then((response) => {
        setBusStations(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    let benxeDi = document.getElementById("dep").value;
    let benxeDen = document.getElementById("dest").value;
    let date = document.getElementById("date").value;
    window.location.href = `/ticket/trip-list?dep=${benxeDi}&dest=${benxeDen}&date=${date}`;
  };
  return (
    <form className="search-form">
      <div class="input-group">
        <div class="input-group-prepend ">
          <span class="input-group-text">
            <FontAwesomeIcon icon={faMapMarker} color="blue" />
          </span>
        </div>
        <select type="text" id="dep" class="form-control search-form__input">
          {busStations.map((busStation) => {
            return (
              <option key={busStation.maBx} value={busStation.maBx}>
                {busStation.tenBx}
              </option>
            );
          })}
        </select>

        <div class="input-group-prepend">
          <span class="input-group-text">
            <div class="search-exchange">
              <FontAwesomeIcon icon={faExchangeAlt} color="blue" />
              <FontAwesomeIcon icon={faMapMarker} color="blue" />
            </div>
          </span>
        </div>
        <select type="text" id="dest" class="form-control search-form__input">
          {busStations.map((busStation) => {
            return (
              <option key={busStation.maBx} value={busStation.maBx}>
                {busStation.tenBx}
              </option>
            );
          })}
        </select>
        <input
          className="form-control search-form__input"
          type="date"
          id="date"
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Tìm vé xe
        </button>
      </div>
    </form>
  );
}

export default Search;
