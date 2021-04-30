import React from 'react';
import PropTypes from 'prop-types';
import Trip from '../../components/Trip';
import './TripListPage.scss';
import Search from '../../../../components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import axios from 'axios';
import { addTicket, getTicket } from '../../TicketSlice';

TripListPage.propTypes = {

};

function TripListPage(props) {
  const tickets = useSelector(state => state.tickets);
  const dispatch = useDispatch();
  const history = useHistory();

  const fetchData = React.useCallback(() => {
    axios.get("https://qlbvxk.herokuapp.com/api/tickets")
    .then((response) => {
      dispatch(addTicket({
        id: 2,
        maKhachHang: 'k34',
        maChuyenXe: 'cnh',
        maChoNgoi: 'jws6',
      }));  
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  React.useEffect(() => {
    fetchData()
  }, [fetchData])
  console.log(tickets);
  return (
    <div className="trip-list">
      <div className="search-list"><Search /></div>
      <p className="trip-number">Vé xe từ Hà Nội đi Sài Gòn: 57 chuyến</p>
      <div className="trip_detail"><Trip /></div>
      <div className="trip_detail"><Trip /></div>
      <div className="trip_detail"><Trip /></div>
    </div>
  );
}

export default TripListPage;