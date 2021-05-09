import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../../components/Rating';
import './RatingPage.scss';
RatingPage.propTypes = {

};

function RatingPage(props) {
  return (
    <div className="rating-page">
      <div className="rating-item"><Rating /></div>
    </div>
  );
}

export default RatingPage;