import React, { useEffect, useState } from 'react';
import myaxios from '../../../../app/api';
import Avatar from '../../../../img/avatar.png';
import { generateStar } from '../Trip';
import './ListReview.scss';

const ListReview = (props) => {
  const { id } = props;
  const [reviews, setReviews] = useState();
  useEffect(() => {
    myaxios.get(`reviews/search?garageid=${id}`)
      .then(res => setReviews(res.data))
      .catch(err => {
        throw err;
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {reviews && (
        <div className="review">
          {reviews.map(review => {
            return (
              <div className="flex review-item">
                <img className="review-avt" src={review.imageUrl || Avatar} alt="avatar" />
                <div>
                  <p className="review-name">{review.tenNd}</p>
                  <div className="flex">
                    {generateStar(review.sao)}
                  </div>
                  <p className="review-content">{review.noiDungDanhGia}</p>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default ListReview;
