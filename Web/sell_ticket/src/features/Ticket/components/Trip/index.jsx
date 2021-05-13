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
function Trip(props) {
  const {trip} = props;
  const dep = trip.ngayXuatBen.split("T")[1].slice(0,-3);
  const dest = trip.ngayDen.split("T")[1].slice(0,-3);
  const  numberWithCommas = (x) => {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
  
}
  return (
    <div className="detail-ticket">
      <Row>
        <Col xs="12" md="6" lg="5">
          <img className="img_car" src="https://static.vexere.com/production/images/1601886237795.jpeg?w=250&h=250" alt="img"></img>
        </Col>
        <Col>
          <div className="infor_group">
            <p className="infor__name">Nhà xe {trip.nhaXe}</p>
            {/* <p className="infor__date">{trip.ngayXuatBen}</p> */}
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
          <Row>
                <button className="benefit-detail">Tiện nghi, sạch sẽ</button>
                <button className="benefit-detail">Thông tin rõ ràng</button>
                <p className="empty-chair">{trip.soChoTrong} chỗ trống</p>
          <p className="infor-price">{numberWithCommas(trip.donGia)}đ</p>
          </Row>
          <div className="flex-center">
          <a href={`/ticket/booking?trip=${trip.maChuyenXe}&price=${trip.donGia}`} className="btn btn-book-ticket">Đặt vé</a>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Trip;