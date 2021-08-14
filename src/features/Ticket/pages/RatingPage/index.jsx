import React from 'react';
import Rating from '../../components/Rating';
import './RatingPage.scss';

function RatingPage(props) {
  
  return (
    <div className="rating-page">
      <div className="rating-item"><Rating /></div>
    </div>
  );
}

export default RatingPage;