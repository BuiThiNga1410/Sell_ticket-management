import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Booking.scss';
import Trip from '../../components/Trip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMapMarker, faChair } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';
import FormBooking from '../../components/FormBooking';

Booking.propTypes = {

};

function Booking(props) {

  const [step, setStep] = useState(1);


  const handleClickNext = () => {
    switch (step) {
      case 1:
        document.getElementsByClassName("booking_note")[0].setAttribute("style", "display: none;");
        document.getElementsByClassName("form-booking")[0].setAttribute("style", "display: none");
        document.getElementsByClassName("pickup-dropoff")[0].setAttribute("style", "display: block");

        document.getElementsByClassName("booking_header__item")[1].setAttribute("style", "color: blue");
        document.getElementsByClassName("booking_header__item")[0].setAttribute("style", "color: black");
        setStep(2);
        break;
      case 2:
        document.getElementsByClassName("booking_note")[0].setAttribute("style", "display: none;");
        document.getElementsByClassName("form-booking")[0].setAttribute("style", "display: block");
        document.getElementsByClassName("pickup-dropoff")[0].setAttribute("style", "display: none");

        document.getElementsByClassName("booking_header__item")[2].setAttribute("style", "color: blue");
        document.getElementsByClassName("booking_header__item")[1].setAttribute("style", "color: black");
        setStep(3);
        break;
      case 3:
        break;
      default:
        break;
    }
  }

  const handleClickPrev = () => {
    switch (step) {
      case 2:
        document.getElementsByClassName("booking_note")[0].setAttribute("style", "display: block;");
        document.getElementsByClassName("form-booking")[0].setAttribute("style", "display: none");
        document.getElementsByClassName("pickup-dropoff")[0].setAttribute("style", "display: none");

        document.getElementsByClassName("booking_header__item")[0].setAttribute("style", "color: blue");
        document.getElementsByClassName("booking_header__item")[1].setAttribute("style", "color: black");
        setStep(1);
        break;
      case 3:
        document.getElementsByClassName("booking_note")[0].setAttribute("style", "display: none;");
        document.getElementsByClassName("form-booking")[0].setAttribute("style", "display: none");
        document.getElementsByClassName("pickup-dropoff")[0].setAttribute("style", "display: block");

        document.getElementsByClassName("booking_header__item")[1].setAttribute("style", "color: blue");
        document.getElementsByClassName("booking_header__item")[2].setAttribute("style", "color: black");
        setStep(2);
        break;
      case 1:
        break;
      default:
        break;
    }
  }

  const handleClickChair = (e) => {
    if (e.target.getAttribute("color") === "blue") {
      e.target.setAttribute("color", "gray");
    }
    else e.target.setAttribute("color", "blue");
  }
  return (
    <div>
      <div className="container"><Trip /></div>
      <div className="container booking_header">
        <p className="booking_header__item"><FontAwesomeIcon icon={faCheckCircle} color="blue" /> Chọn chỗ</p>
        <p className="booking_header__item"><FontAwesomeIcon icon={faCheckCircle} color="blue" /> Điểm đón trả</p>
        <p className="booking_header__item"><FontAwesomeIcon icon={faCheckCircle} color="blue" /> Nhập thông tin</p>

      </div>
      <div className="container booking_note">
        <Row>
          <Col lg="5">
            <div className="note">
              <p className="note__title">Chú thích</p>
              <div className="note__detail">
                <FontAwesomeIcon icon={faChair} color="gray" size="2x" />
                <p className="note__detail-item">Còn trống</p>
              </div>

              <div className="note__detail">
                <FontAwesomeIcon icon={faChair} color="red" size="2x" />
                <p className="note__detail-item">Đã đặt</p>
              </div>

              <div className="note__detail">
                <FontAwesomeIcon icon={faChair} color="blue" size="2x" />
                <p className="note__detail-item">Đang chọn</p>
              </div>
            </div>

          </Col>
          <Col lg="7">
            <Row>
              <Col lg="4">
                <p className="floor-name">Tầng 1</p>
                <div className="floor">
                  <div className="floor__row">
                    <div className="chair-info">
                      <FontAwesomeIcon className="chair-icon" onClick={handleClickChair} icon={faChair} color="gray" size="2x" />
                    </div>

                    <div className="chair-info">
                      <FontAwesomeIcon className="chair-icon" onClick={handleClickChair} icon={faChair} color="gray" size="2x" />
                    </div>

                    <div className="chair-info">
                      <FontAwesomeIcon className="chair-icon" onClick={handleClickChair} icon={faChair} color="gray" size="2x" />
                    </div>
                  </div>

                  <div className="floor__row">
                    <div className="chair-info">
                      <FontAwesomeIcon className="chair-icon" onClick={handleClickChair} icon={faChair} color="gray" size="2x" />
                    </div>

                    <div className="chair-info">
                      <FontAwesomeIcon className="chair-icon" onClick={handleClickChair} icon={faChair} color="gray" size="2x" />
                    </div>

                    <div className="chair-info">
                      <FontAwesomeIcon className="chair-icon" onClick={handleClickChair} icon={faChair} color="gray" size="2x" />
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg="4">
                <p className="floor-name">Tầng 2</p>
                <div className="floor">
                  <div className="floor__row">
                    <div className="chair-info">
                      <FontAwesomeIcon className="chair-icon" onClick={handleClickChair} icon={faChair} color="gray" size="2x" />
                    </div>

                    <div className="chair-info">
                      <FontAwesomeIcon className="chair-icon" onClick={handleClickChair} icon={faChair} color="gray" size="2x" />
                    </div>

                    <div className="chair-info">
                      <FontAwesomeIcon className="chair-icon" onClick={handleClickChair} icon={faChair} color="gray" size="2x" />
                    </div>
                  </div>

                  <div className="floor__row">
                    <div className="chair-info">
                      <FontAwesomeIcon className="chair-icon" onClick={handleClickChair} icon={faChair} color="gray" size="2x" />
                    </div>

                    <div className="chair-info">
                      <FontAwesomeIcon className="chair-icon" onClick={handleClickChair} icon={faChair} color="gray" size="2x" />
                    </div>

                    <div className="chair-info">
                      <FontAwesomeIcon className="chair-icon" onClick={handleClickChair} icon={faChair} color="gray" size="2x" />
                    </div>
                  </div>



                </div>
              </Col>
            </Row>

          </Col>
        </Row>
      </div>
      <div className="pickup-dropoff container">
        <Row>
          <Col lg="6">
            <div className="pickup">
              <p className="pickup-dropoff-title">Điểm đón</p>
              <div className="pickup-dropoff-info">
                <input type="radio" />
                <p className="pickup-dropoff-info__time">18:30</p>
                <p className="pickup-dropoff-info__name">Bến xe nước ngầm</p>
              </div>
              <div className="pickup-dropoff-info">
                <FontAwesomeIcon icon={faMapMarker} color="blue" />
                <p className="pickup-dropoff-info-detail">Số 1 Ngọc Hồi, Hoàng Liệt, Hoàng Mai, Hà Nội</p>
              </div>
            </div>


          </Col>

          <Col lg="6">
            <p className="pickup-dropoff-title">Điểm trả</p>
            <div className="pickup-dropoff-info">
              <input type="radio" />
              <p className="pickup-dropoff-info__time">18:30</p>
              <p className="pickup-dropoff-info__name">Bến xe nước ngầm</p>
            </div>
            <div className="pickup-dropoff-info">
              <FontAwesomeIcon icon={faMapMarker} color="blue" />
              <p className="pickup-dropoff-info-detail">Số 1 Ngọc Hồi, Hoàng Liệt, Hoàng Mai, Hà Nội</p>
            </div>
          </Col>
        </Row>
      </div>

      <div className="container form-booking"><FormBooking /></div>

      <div className="booking_footer container">
        <button className="btn btn-outline-dark" onClick={handleClickPrev}>Quay lại</button>
        <div className="price-next">
          <div className="price">
            <p className="price-title">Tổng cộng: </p>
            <p className="price-detail">200.000đ</p>
          </div>
          <button className="btn btn-primary" onClick={handleClickNext}>Tiếp tục</button>
        </div>

      </div>
    </div>
  );
}

export default Booking;