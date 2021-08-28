import React, { useEffect, useState } from 'react';
import myaxios from '../../../../app/api';
import { generateStar } from '../../../Ticket/components/Trip';
import Avatar from '../../../../img/avatar.png';
import { Link } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReview] = useState();
  const query = new URLSearchParams(window.location.search);
  const id = query.get("id");

  useEffect(() => {
    myaxios.get(`reviews/ticket?ticketid=${id}`)
      .then(res => setReview(res.data))
      .catch(err => {
        throw err;
      })
  }, [id]);

  return (
    <>
      {!!reviews && (
        <div className="review" style={{border: 0}}>
          <p className="rating__label">Đánh giá của bạn</p>
          <div className="flex review-item">
            <img className="review-avt" src={reviews.imageUrl || Avatar} alt="avatar" />
            <div>
              <p className="review-name">{reviews.tenNd}</p>
              <div className="flex">
                {generateStar(reviews.sao)}
              </div>
              <p className="review-content">{reviews.noiDungDanhGia}</p>
            </div>
            <Link className="review-edit" to={`/reviews/edit?id=${reviews.maDanhGia}`}>
              <i class="far fa-edit"></i>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Reviews;
