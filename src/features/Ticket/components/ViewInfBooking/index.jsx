import React from 'react';

import './ViewInfBooking.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus } from '@fortawesome/free-solid-svg-icons';

function ViewInfBooking(props) {
  return (
    <div className="inf-booking">
      <p className="inf-booking_title">Thông tin đặt vé</p>
      <div className="inf-location">
        <p className="inf-location-item">Hà Nội</p>
        <FontAwesomeIcon icon={faBus} color="black" size="2x" />
        <p className="inf-location-item">Đà Nẵng</p>
      </div>
      <p className="inf-booking_time">19h 14/5/2020</p>
      <div className="inf-booking-client">
        <div className="my-row">
          <p className="infor-booking_detail">Họ tên: Bùi Thị Nga</p>
          <p className="infor-booking_detail">Biển số xe: 29F- 2345</p>
        </div>
        <div className="my-row">
          <p className="infor-booking_detail">CMND: 177734267</p>
          <p className="infor-booking_detail">Số điện thoại: 0376755120</p>
        </div>
        <div className="my-row">
          <p className="infor-booking_detail">Ngày đặt: 12h 10/5/2020</p>
          <p className="infor-booking_detail">Đã thanh toán</p>
        </div>

        <div className="my-row my-group-btn">
          <input className="my-btn-primary" value="Xác nhận" />
          <input className="my-btn-primary" value="In hóa đơn" />
        </div>

      </div>
    </div>
  );
}

export default ViewInfBooking;