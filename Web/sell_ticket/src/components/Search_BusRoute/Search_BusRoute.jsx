import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import "./Search_BusRoute.scss";

import { useHistory } from "react-router";
import axios from "axios";

Search_BusRoute.propTypes = {};

function Search_BusRoute(props) {
  const [busStations, setBusStations] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios
      .get("https://qlbvxk.herokuapp.com/api/busstations")
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
    window.location.href = `/ticket/trip-list?dep=${benxeDi}&dest=${benxeDen}`;
  };
  return (
    <form className="my-search-form">
      <div class="input-group">
        <div class="input-group-prepend ">
          <span class="input-group-text">
            <FontAwesomeIcon icon={faMapMarker} color="blue" />
          </span>
        </div>
        <select type="text" id="dep" class="form-control my-search-form__input">
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
        <select
          type="text"
          id="dest"
          class="form-control my-search-form__input"
        >
          {busStations.map((busStation) => {
            return (
              <option key={busStation.maBx} value={busStation.maBx}>
                {busStation.tenBx}
              </option>
            );
          })}
        </select>

        <button className="btn btn-primary" onClick={handleSearch}>
          Tìm tuyến xe
        </button>
      </div>
    </form>
  );
}

export default Search_BusRoute;