import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Trip from '../../components/Trip';
import './TripListPage.scss';
import Search from '../../../../components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import axios from 'axios';
import { addTicket, getTicket } from '../../TicketSlice';
import myaxios from '../../../../app/api';

TripListPage.propTypes = {

};

function TripListPage(props) {
  const [trips, setTrips] = useState([]);
  const query = new URLSearchParams(props.location.search);
  let dep = query.get("dep");
  let date = query.get("date");
  let dest = query.get("dest");
  useEffect(() => {
    if (!(dep && date && dest)) {
      myaxios.get('/bustrips')
        .then((response) => {
          console.log(response.data);
          setTrips(response.data);
        })
        .catch((error) => {
          console.log(error)
        })
    }
    else {
      myaxios.get(`/bustrips/search?dep=${dep}&dest=${dest}&date=${date}`)
        .then((response) => {
          setTrips(response.data);
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, []);
  return (
    <div className="trip-list">
      <div className="search-list"><Search /></div>
      {trips.length ? (
        <div className="trip-list-wrap">
          <p className="trip-number">Vé xe từ Hà Nội đi Sài Gòn: {trips.length} chuyến</p>
          {trips.map((trip) => {
            return (
              <div className="trip_detail"><Trip trip={trip} /></div>
            )
          })}
        </div>
      ): (
        <p>Không tìm thấy chuyến xe của bạn</p>
      )}
    </div>
  );
}

export default TripListPage;