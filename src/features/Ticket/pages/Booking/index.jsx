import React, { useEffect, useState } from 'react';

import './Booking.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Col, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import myaxios from '../../../../app/api';
import { useHistory } from 'react-router';

export const numberWithCommas = (x) => {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x))
    x = x.replace(pattern, "$1,$2");
  return x;
}

function Booking(props) {
  let step = 1;
  const [seats, setSeats] = useState();
  const [customers, setCustomers] = useState([]);
  const history = useHistory();
  const [selectedSeats, setSelected] = useState([]);

  const query = new URLSearchParams(props.location.search);
  const tripId = query.get("trip");
  const price = query.get("price");
  const date = query.get("date");
  const numberSeat = query.get("number");
  const user = JSON.parse(localStorage.getItem('user'));

  console.log('selecte', selectedSeats);

  useEffect(() => {
    myaxios.get(`tickets/seats?bustripid=${tripId}&date=${date}`)
      .then((response) => {
        setSeats(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
    if (user.vaitro !== 3) {
      myaxios.get("/customers")
        .then((response) => {
          setCustomers(response.data);

        })
        .catch((error) => {
          console.log(error);
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClickNext = () => {
    switch (step) {
      case 1:
        if (!selectedSeats.length) {
          alert("Vui lòng chọn chỗ");
        }

        else {
          document.getElementsByClassName("booking_note")[0].setAttribute("style", "display: none;");
          document.getElementsByClassName("form-booking")[0].setAttribute("style", "display: block");

          document.getElementsByClassName("booking_header__item")[1].setAttribute("style", "color: blue");
          document.getElementsByClassName("booking_header__item")[0].setAttribute("style", "color: black");
          step = 2;
        }
        break;
      case 2:
        //handle booking
        let note = document.getElementById("note") ? document.getElementById("note").value : "";
        let name = document.getElementById("name") ? document.getElementById("name").value : "";
        let phone = document.getElementById("phone") ? document.getElementById("phone").value : "";
        let customerId = document.getElementById("customerId") ? document.getElementById("customerId").value : 0;
    
        if (selectedSeats.length && ((name && phone) || customerId)) {

          if (user.vaitro !== 3) {
            myaxios.post('/tickets/', {
              "MaKh": customerId,
              "MaChoNgoi": selectedSeats,
              "MaChuyenXe": tripId,
              "DaThanhToan": price/2,
              "NgayDi": date,
              "GhiChu": note,
            })
              .then((response) => {
                user.vaitro === 3 ? history.push('/account/purchase') : history.push('/qlTicket');
              })
              .catch((error) => {
                console.log(error);
              })
          } else {
            history.push({
              pathname: '/payment',
              state: {
                MaKh: +user.maNd,
                MaChoNgoi: selectedSeats,
                MaChuyenXe: tripId,
                NgayDi: date,
                Price: price,
                GhiChu: note,
              }
            });
          }
        }
        else if (!name || !phone) {
          alert("Vui lòng cập nhật thông tin cá nhân");
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

  const generateSeat = (start, end) => {
    let array = [];
    for (let i = start; i <= end; i++) {
      array.push(i);
    }
    const newArray = array.map(seat => {
      return (
        // <div className="chair-info" key={seat}>
        //   <FontAwesomeIcon id={seat} className="chair-icon" onClick={handleClickChair} icon={faChair} color={seats?.includes(seat) ? 'red' : 'gray'} size="2x" />
        // </div>
        <div className="chair-info center">
          <div
            className={`chair center ${seats?.includes(seat) ? 'disable' : selectedSeats.includes(seat) ? 'select' : ''}`}
            id={seat}
            onClick={() => handleClickChair(seat)}
            key={seat}
          >
            {seat}
          </div>
        </div>

      )
    })
    return newArray;
  }

  const handleClickChair = (id) => {
    if (selectedSeats.includes(id)) {
      let temp = [...selectedSeats];
      setSelected(temp.filter(seat => seat !== +id));
    }
    else if (!seats.includes(id)) {
      let temp = [...selectedSeats];
      temp.push(+id);
      setSelected(temp);
    }
  }

  return (
    <div className="booking-wrap">
      {/* <div className="container"><Trip /></div> */}
      <div className="container booking_header">
        <p className="booking_header__item"><FontAwesomeIcon icon={faCheckCircle} color="blue" /> Chọn chỗ</p>
        <p className="booking_header__item"><FontAwesomeIcon icon={faCheckCircle} color="blue" /> Nhập thông tin</p>
      </div>
      <div className="container booking_note">
        <Row>
          <Col lg="4">
            <div className="note">
              <p className="note__title">Chú thích</p>
              <div className="note__detail">
                <div className="chair small" />
                <p className="note__detail-item">Còn trống</p>
              </div>

              <div className="note__detail">
                <div className="chair small disable" />
                <p className="note__detail-item">Đã đặt</p>
              </div>

              <div className="note__detail">
                <div className="chair small select" />
                <p className="note__detail-item">Đang chọn</p>
              </div>
            </div>

          </Col>
          <Col lg="8">
            <Row>
              <Col lg="6">
                <p className="floor-name">Tầng 1</p>
                <div className="floor">
                  <div className="floor__row">
                    {generateSeat(0, numberSeat / 2 - 1)}
                  </div>
                </div>
              </Col>

              <Col lg="6">
                <p className="floor-name">Tầng 2</p>
                <div className="floor">
                  <div className="floor__row">
                    {generateSeat(numberSeat / 2, numberSeat - 1)}
                  </div>

                </div>
              </Col>
            </Row>

          </Col>
        </Row>
      </div>
      <div className="container form-booking">
        <Form>
          {user.vaitro !== 3 ? (
            <FormGroup controlId="customerId">
              <FormLabel>Email</FormLabel>
              <FormControl as="select">
                {customers.map((customer) => {
                  return (
                    <option value={customer.maNd}>{customer.sdt}</option>
                  )
                })}
              </FormControl>
              <p className="text-error"></p>
            </FormGroup>
          )
            : (
              <div>
                <FormGroup controlId="name">
                  <FormLabel>Họ tên</FormLabel>
                  <FormControl placeholder="Nhập họ tên" defaultValue={user.vaitro === 3 && user.tenNd} readOnly />
                  <p className="text-error"></p>
                </FormGroup>

                <FormGroup controlId="phone">
                  <FormLabel>Số điện thoại</FormLabel>
                  <FormControl type="number" placeholder="Nhập số điện thoại" defaultValue={user.vaitro === 3 && +user.sdt} readOnly />
                  <p className="text-error"></p>

                </FormGroup>
              </div>
            )
          }
          <FormGroup controlId="note">
            <FormLabel>Ghi chú</FormLabel>
            <FormControl as="textarea" placeholder="Nhập vào yêu cầu của bạn" />
          </FormGroup>
        </Form >
      </div>

      <div className="booking_footer container">
        <button className="btn btn-outline-dark" onClick={handleClickPrev}>Quay lại</button>
        <div className="price-next">
          <div className="my-price">
            <p className="price-title">Tổng cộng: </p>
            <p className="price-detail">{numberWithCommas(selectedSeats.length * price)}đ</p>
          </div>
          <button className="btn btn-primary" onClick={handleClickNext}>Tiếp tục</button>
        </div>

      </div>
    </div>
  );
}

export default Booking;