import React, { useEffect, useState } from 'react';

import './Booking.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faChair } from '@fortawesome/free-solid-svg-icons';
import { Col, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import myaxios from '../../../../app/api';
import { useHistory } from 'react-router';

const numberWithCommas = (x) => {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x))
    x = x.replace(pattern, "$1,$2");
  return x;

}

function Booking(props) {
  const [step, setStep] = useState(1);
  const [seats, setSeats] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const history = useHistory();

  const query = new URLSearchParams(props.location.search);
  const tripId = query.get("trip");
  const price = query.get("price");
  const user = JSON.parse(localStorage.getItem('user'));
  const prevPath = query.get('prevPath');

  useEffect(() => {
    myaxios.get(`seats/search?bustripid=${tripId}`)
      .then((response) => {
        setSeats(response.data);
      })
      .catch((error) => {
        console.log(error);
      })

    if (prevPath) {
      myaxios.get("/customers")
        .then((response) => {
          setCustomers(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }, [])

  const handleClickNext = (e) => {
    e.preventDefault();
    switch (step) {
      case 1:
        if (!selectedSeats.length) {
          alert("Vui lòng chọn chỗ");
        }

        else {
          setStep(2);
        }
        break;
      case 2:
        //handle booking
        let note = document.getElementById("note") ? document.getElementById("note").value : "";
        let name = document.getElementById("name") ? document.getElementById("name").value : "";
        let phone = document.getElementById("phone") ? document.getElementById("phone").value : "";
        let customerId = document.getElementById("customerId") ? document.getElementById("customerId").value : 0;
        if (selectedSeats.length && ((name && phone) || customerId)) {
          myaxios.post('/tickets/', {
            "MaKh": !prevPath ? +user.maNd : customerId,
            "MaChoNgoi": selectedSeats,
            "MaChuyenXe": tripId,
            "GhiChu": note,
          })
            .then((response) => {
              !prevPath ? history.push('/account/purchase') : history.push('/qlTicket');
            })
            .catch((error) => {
              console.log(error);
            })
        }
        else if (!name || !phone) {
          alert("Vui lòng cập nhật thông tin cá nhân");
        }
        break;
      default:
        break;
    }
  }

  const handleClickChair = (e) => {
    e.preventDefault();
    const element = e.target;
    if (element.getAttribute("color") === "blue") {
      element.setAttribute("color", "gray");
      setSelectedSeats( prev => prev.filter(seat => seat !== +element.id));
    }
    else if (element.getAttribute("color") === "gray") {
      element.setAttribute("color", "blue");
      setSelectedSeats([...selectedSeats, +element.id]);
    }
  }

  console.log('select', selectedSeats);
  console.log("step", step);
  return (
    <div className="booking-wrap">
      {/* <div className="container"><Trip /></div> */}
      <div className="container booking_header">
        <p className={`booking_header__item ${step === 1 && 'blue'}`}><FontAwesomeIcon icon={faCheckCircle} color="blue" /> Chọn chỗ</p>
        <p className={`booking_header__item ${step === 2 && 'blue'}`}><FontAwesomeIcon icon={faCheckCircle} color="blue" /> Nhập thông tin</p>
      </div>
      {step === 1 && (
        <div className="container booking_note">
          <Row>
            <Col lg="4">
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
            <Col lg="8">
              <Row>
                <Col lg="6">
                  <p className="floor-name">Tầng 1</p>
                  <div className="floor">
                    <div className="floor__row">
                      {seats.slice(0, seats.length / 2).map((seat) => {
                        return (
                          <div className="chair-info" key={seat.maChoNgoi} onClick={handleClickChair} >
                            <FontAwesomeIcon 
                              id={seat.maChoNgoi} 
                              className="chair-icon"
                              icon={faChair} 
                              color={`${selectedSeats.includes(+seat.maChoNgoi) ? 'blue' : seat.tinhTrangChoNgoi ? 'red' : 'gray'}`} 
                              size="2x" 
                            />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </Col>
                <Col lg="6">
                  <p className="floor-name">Tầng 2</p>
                  <div className="floor">
                    <div className="floor__row">
                      {seats.slice(seats.length / 2).map((seat) => {
                        return (
                          <div className="chair-info" key={seat.maChoNgoi} onClick={handleClickChair} >
                            <FontAwesomeIcon 
                              id={seat.maChoNgoi} 
                              className="chair-icon" 
                              icon={faChair} 
                              color={`${selectedSeats.includes(+seat.maChoNgoi) ? 'blue' : seat.tinhTrangChoNgoi ? 'red' : 'gray'}`} 
                              size="2x" 
                            />
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
      )}
      {step === 2 && (
        <div className="container form-booking">
          <Form>
            {!!prevPath ? (
              <FormGroup controlId="customerId">
                <FormLabel>Email</FormLabel>
                <FormControl as="select">
                  {customers.map((customer) => {
                    return (
                      <option value={customer.maNd}>{customer.email}</option>
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
      )}
      <div className="booking_footer container">
        <button
          className="btn btn-outline-dark"
          onClick={(e) => {
            e.preventDefault();
            setStep(step - 1);
          }}
          disabled={step === 1}
        >
          Quay lại
        </button>
        <div className="price-next">
          <div className="my-price">
            <p className="price-title">Tổng cộng: </p>
            <p className="price-detail">{`${numberWithCommas(selectedSeats.length * price)}đ`}</p>
          </div>
          <button 
            className="btn btn-primary" 
            onClick={handleClickNext}
          >
            Tiếp tục
          </button>
        </div>

      </div>
    </div>
  );
}

export default Booking;