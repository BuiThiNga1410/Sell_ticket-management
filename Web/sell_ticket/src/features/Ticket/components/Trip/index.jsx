import React from 'react';
import PropTypes from 'prop-types';
import '../Rating/Rating.scss';
import './Trip.scss';
import { Col, Row } from 'react-bootstrap';

Trip.propTypes = {

};

function Trip(props) {
  const {trips} = props;
  return (
    <div className="detail-ticket">
      <Row>
        <Col xs="12" md="6" lg="5">
          <img className="img_car" src="https://static.vexere.com/production/images/1601886237795.jpeg?w=250&h=250" alt="img"></img>
        </Col>
        <Col>
          <div className="infor_group">
            <p className="infor__name">Tràng An Limousine</p>
            <p className="infor__date">Ngày 23/2/2020</p>
          </div>

          <p className="infor-detail">Limousine 9 chỗ VIP</p>

          <div className="infor_group-time">
            <p className="infor_group-time__hour">19:00</p>
            <p>Rạp xiếc trung ương</p>
          </div>

          <p className="infor_time">1h00m</p>
          <div className="infor_group-time">
            <p className="infor_group-time__hour">20:00</p>
            <p>Văn phòng Ninh Bình</p>
          </div>

          <p className="infor-price">150.000đ</p>

          <Row>
            <Col lg="7">
              <div className="group-benefit">
                <button className="benefit-detail">Xe chạy đúng giờ</button>
                <button className="benefit-detail">Lái xe an toàn</button>
              </div>
              <div className="group-benefit">
                <button className="benefit-detail">Tiện nghi, sạch sẽ</button>
                <button className="benefit-detail">Thông tin rõ ràng</button>

              </div>
            </Col>
            <Col>
              <p className="empty-chair">9 chỗ trống</p>
              <div className="detail_book">
                <p className="infor__detail">Thông tin chi tiết</p>
                <a href="/ticket/booking" className="btn-book-ticket">Đặt vé</a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Trip;