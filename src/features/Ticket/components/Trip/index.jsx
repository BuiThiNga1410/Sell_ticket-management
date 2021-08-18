import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../Rating/Rating.scss';
import './Trip.scss';
import { Col, Row } from 'react-bootstrap';
import myaxios from '../../../../app/api';
import ListReview from '../ListReview';

Trip.propTypes = {
  trips: PropTypes.array,
};
Trip.defaultProps = {
  trip: [],
}
const numberWithCommas = (x) => {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x))
    x = x.replace(pattern, "$1,$2");
  return x;
}

const timeDest = (date, time) => {
  const a = date.slice(0, 2);
  let b = +a + +time;
  console.log('a', a);
  // eslint-disable-next-line no-unused-vars
  b = b < 24 ? `0${b}`.slice(-2) : `0${b - 24}`.slice(-2,);
  return b + date.slice(2, -3);

}

export const generateStar = (star) => {
  let arr = [];
  let temp = star;
  for (let i = 0; i < 5; i++) {
    if (temp >= 1) {
      arr.push(<i className="fas fa-star star-icon" />)
    } else if (temp > 0 && temp < 1) {
      arr.push(<i className="fas fa-star-half-alt star-icon" />)
    } else {
      arr.push(<i className="far fa-star star-icon" />)
    }
    temp -= 1; 
  }
  return arr;
}

function Trip(props) {
  const { trip, date } = props;
  const [numberEmpty, setNumberEmpty] = useState();
  const [star, setStar] = useState();
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    myaxios.get(`tickets/seats?bustripid=${trip.maChuyenXe}&date=${date}T${trip.gioXuatBen}`)
      .then((response) => {
        setNumberEmpty(trip.soChoNgoi - response.data.length);
      })
      .catch((error) => {
        console.log(error);
      })
    myaxios.get(`reviews/search?garageid=${trip.maNhaXe}`)
      .then((res) => {
        console.log('review', res.data);
        setStar((res.data.reduce((sum, star) => {
          return sum + star.sao;
        }, 0) / res.data.length).toFixed(1));
      })
      .catch((error) => {
        console.log(error);
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleBeforeBooking = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user.vaitro) {
      // eslint-disable-next-line no-restricted-globals
      if (confirm("Vui lòng đăng nhập để tiến hành mua vé")) {
        window.location.href = "/login";
      }
      return;
    }
    if (!numberEmpty) {
      alert("Chuyến xe đã hết chỗ, vui lòng chọn chuyến khác");
      return;
    }
    if (!(user.tenNd && user.sdt)) {
      // eslint-disable-next-line no-restricted-globals
      if (confirm("Vui lòng cập nhật thông tin đầy đủ trước khi mua vé")) {
        window.location.href = "/account/profile";
      }
      return;
    }
    window.location.href = `/ticket/booking?trip=${trip.maChuyenXe}&number=${trip.soChoNgoi}&price=${trip.donGia}&date=${date}T${trip.gioXuatBen}`;
  }
  
  return (
    <div className="trip-page">
      <div className="detail-ticket">
        <Row>
          <Col xs="12" md="6" lg="5">
            <img className="img_car" src="https://static.vexere.com/production/images/1601886237795.jpeg?w=250&h=250" alt="img"></img>
          </Col>
          <Col>
            <div className="infor_group">
              <p className="infor__name">Nhà xe {trip.tenNhaXe}</p>
              <p className="infor__date">{date}</p>
            </div>

            {/* <p className="infor-detail">Limousine 9 chỗ VIP</p> */}

            <div className="infor_group-time">
              <p className="infor_group-time__hour">{trip.gioXuatBen.slice(0, -3)}</p>
              <p>{trip.tenBxDi}</p>
            </div>

            {/* <p className="infor_time"></p> */}
            <div className="infor_group-time">
              <p className="infor_group-time__hour">{timeDest(trip.gioXuatBen, trip.thoiGianDiChuyen)}</p>
              <p>{trip.tenBxDen}</p>
            </div>
            <div className="f-space-bw mg-16">
              <div className="flex">
                {generateStar(star)}
              </div>
              <p className="empty-chair">{numberEmpty} chỗ trống</p>
            </div>
            <div className="f-space-bw mg-16">
              <button className="trip-action" onClick={() => setShowReview(!showReview)}>Xem review</button>
              <p className="infor-price">{numberWithCommas(trip.donGia)}đ</p>
            </div>
            <div className="flex-center">
              <button className="btn btn-book-ticket" onClick={handleBeforeBooking}>Đặt vé</button>
            </div>
          </Col>
        </Row>
      </div>
      {!!showReview && <ListReview id={trip.maNhaXe}/>}
    </div>
  );
}

export default Trip;