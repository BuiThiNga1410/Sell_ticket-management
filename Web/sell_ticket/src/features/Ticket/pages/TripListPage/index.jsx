import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import Trip from '../../components/Trip';
import './TripListPage.scss';
import Search from '../../../../components/Search';
import myaxios from '../../../../app/api';

function TripListPage(props) {
  const [trips, setTrips] = useState();

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
    <>
      {!!trips ? (
        <div className="trip-list">
          <div className="search-list"><Search /></div>
          {trips.length ? (
            <div className="trip-list-wrap">
              <p className="trip-number">Chuyến xe phù hợp: {trips.length} chuyến</p>
              {trips.map((trip) => {
                return (
                  <div className="trip_detail"><Trip trip={trip} /></div>
                )
              })}
            </div>
          ) : (
            <div className="notFound">
              <p className="notFound-label">Không tìm thấy chuyến xe của bạn</p>
              <img className="notFound-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuW_Gkd6eDbGQ7X3JmDZKbSX8q8TZLOPEdv-lMLjICH_OEfS4MVRDAoFP3fsvQU1lV7Ac&usqp=CAU" alt="not found" />
            </div>
          )}
        </div>
      )
        :
        (
          <div className="div-loading">
            <ReactLoading
              type={"spokes"}
              color={"#3785df"}
              height={50}
              width={50}
            />
          </div>
        )}
    </>
  );
}

export default TripListPage;