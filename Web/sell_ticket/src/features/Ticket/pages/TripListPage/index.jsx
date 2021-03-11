import React from 'react';
import PropTypes from 'prop-types';
import Trip from '../../components/Trip';
import './TripListPage.scss';
import Search from '../../../../components/Search';

TripListPage.propTypes = {

};

function TripListPage(props) {
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