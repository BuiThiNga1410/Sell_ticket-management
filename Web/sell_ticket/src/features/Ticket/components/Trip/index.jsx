import React from 'react';
import PropTypes from 'prop-types';
import '../Rating/Rating.scss';
import './Trip.scss';
import { Col, Row } from 'react-bootstrap';

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
function Trip(props) {
  const { trip } = props;
  const dep = trip.ngayXuatBen.split("T")[1].slice(0, -3);
  const dest = trip.ngayDen.split("T")[1].slice(0, -3);
  const handleBeforeBooking = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(!user.vaitro) {
      // eslint-disable-next-line no-restricted-globals
      if(confirm("Vui lòng đăng nhập để tiến hành mua vé")) {
        window.location.href = "/login";
      }
      return;
    }
    if (!trip.soChoTrong) {
      alert("Chuyến xe đã hết chỗ, vui lòng chọn chuyến khác");
      return;
    }
    if (!(user.tenNd && user.sdt)) {
      // eslint-disable-next-line no-restricted-globals
      if(confirm("Vui lòng cập nhật thông tin đầy đủ trước khi mua vé")) {
        window.location.href = "/account/profile";
      }
      return;
    }
    window.location.href = `/ticket/booking?trip=${trip.maChuyenXe}&price=${trip.donGia}`;
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
              <p className="infor__name">Nhà xe {trip.nhaXe}</p>
              <p className="infor__date">{trip.ngayXuatBen.split("T")[0]}</p>
            </div>

            {/* <p className="infor-detail">Limousine 9 chỗ VIP</p> */}

            <div className="infor_group-time">
              <p className="infor_group-time__hour">{dep}</p>
              <p>{trip.tenBxDi}</p>
            </div>

            {/* <p className="infor_time"></p> */}
            <div className="infor_group-time">
              <p className="infor_group-time__hour">{dest}</p>
              <p>{trip.tenBxDen}</p>
            </div>
            <p className="empty-chair">{trip.soChoTrong} chỗ trống</p>
            <p className="infor-price">{numberWithCommas(trip.donGia)}đ</p>
            <div className="flex-center">
              <button className="btn btn-book-ticket" onClick={handleBeforeBooking}>Đặt vé</button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Trip;