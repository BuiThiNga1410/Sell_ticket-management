import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './Booking.scss';
import Trip from '../../components/Trip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMapMarker, faChair } from '@fortawesome/free-solid-svg-icons';
import { Col, Form, FormControl, FormGroup, FormLabel, InputGroup, Row } from 'react-bootstrap';
import FormBooking from '../../components/FormBooking';
import myaxios from '../../../../app/api';
import axios from 'axios';
import { useHistory } from 'react-router';

Booking.propTypes = {

};

function Booking(props) {

  let step = 1;
  const [seats, setSeats] = useState([]);
  const history = useHistory();
  let selectedSeats = [];
  const query = new URLSearchParams(props.location.search);
  const tripId = query.get("trip");
  const customer = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    myaxios.get(`seats/search?bustripid=${tripId}`)
      .then((response) => {
        setSeats(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  const handleClickNext = () => {
    switch (step) {
      case 1:
        document.getElementsByClassName("booking_note")[0].setAttribute("style", "display: none;");
        document.getElementsByClassName("form-booking")[0].setAttribute("style", "display: block");

        document.getElementsByClassName("booking_header__item")[1].setAttribute("style", "color: blue");
        document.getElementsByClassName("booking_header__item")[0].setAttribute("style", "color: black");
        step = 2;
        break;
      case 2:
        //handle booking
        let note = document.getElementById("note").value;
        if (selectedSeats) {
          console.log(selectedSeats);
          myaxios.post('/tickets/', {
            "MaKh": +customer.maNd,
            "MaChoNgoi": selectedSeats[0],
            "MaChuyenXe": tripId,
            "GhiChu": note,
          })
            .then((response) => {
              console.log(response.data);
              console.log(note);
              history.push('/account/purchase');
            })
            .catch((error) => {
              console.log(error);
            })
        }
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

        document.getElementsByClassName("booking_header__item")[0].setAttribute("style", "color: blue");
        document.getElementsByClassName("booking_header__item")[1].setAttribute("style", "color: black");
        step = 1;
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
      selectedSeats = selectedSeats.filter(seat => seat !== +e.target.id);
      console.log(selectedSeats);
    }
    else if (e.target.getAttribute("color") === "gray") {
      e.target.setAttribute("color", "blue");
      selectedSeats.push(+e.target.id);
      console.log(selectedSeats);
    }
  }
  return (
    <div>
      {/* <div className="container"><Trip /></div> */}
      <div className="container booking_header">
        <p className="booking_header__item"><FontAwesomeIcon icon={faCheckCircle} color="blue" /> Chọn chỗ</p>
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
                    {seats.slice(0, seats.length / 2).map((seat) => {
                      return (
                        <div className="chair-info" key={seat.maChoNgoi}>
                          <FontAwesomeIcon id={seat.maChoNgoi} className="chair-icon" onClick={handleClickChair} icon={faChair} color={seat.tinhTrangChoNgoi ? 'red' : 'gray'} size="2x" />
                        </div>
                      )
                    })}

                  </div>
                </div>
              </Col>

              <Col lg="4">
                <p className="floor-name">Tầng 2</p>
                <div className="floor">
                  <div className="floor__row">
                    {seats.slice(seats.length / 2).map((seat) => {
                      return (
                        <div className="chair-info" key={seat.maChoNgoi}>
                          <FontAwesomeIcon id={seat.maChoNgoi} className="chair-icon" onClick={handleClickChair} icon={faChair} color={seat.tinhTrangChoNgoi ? 'red' : 'gray'} size="2x" />
                        </div>
                      )
                    })}
                  </div>

                </div>
              </Col>
            </Row>

          </Col>
        </Row>
      </div>
      <div className="container form-booking">
        <Form>
          <FormGroup controlId="name">
            <FormLabel>Họ tên</FormLabel>
            <FormControl placeholder="Nhập họ tên" defaultValue={customer.tenNd} />
            <p className="text-error"></p>
          </FormGroup>

          <FormGroup controlId="phone">
            <FormLabel>Số điện thoại</FormLabel>
            <FormControl type="number" placeholder="Nhập số điện thoại" defaultValue={+customer.sdt} />
            <p className="text-error"></p>
          </FormGroup>
          <FormGroup controlId="note">
            <FormLabel>Ghi chú</FormLabel>
            <FormControl as="textarea" placeholder="Nhập vào yêu cầu của bạn" />
          </FormGroup>
        </Form >
      </div>

      <div className="booking_footer container">
        <button className="btn btn-outline-dark" onClick={handleClickPrev}>Quay lại</button>
        <div className="price-next">
          <div className="price">
            <p className="price-title">Tổng cộng: </p>
            <p className="price-detail">0đ</p>
          </div>
          <button className="btn btn-primary" onClick={handleClickNext}>Tiếp tục</button>
        </div>

      </div>
    </div>
  );
}

export default Booking;