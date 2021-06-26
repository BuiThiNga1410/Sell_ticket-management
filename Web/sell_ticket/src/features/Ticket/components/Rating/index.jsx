import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faStar } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, InputGroup } from 'react-bootstrap'
import './Rating.scss'

Rating.propTypes = {

};

const handleClickStar = (e) => {
  if (e.target.getAttribute("color") === "yellow") {
    e.target.setAttribute("color", "gray");
  }
  else e.target.setAttribute("color", "yellow");
}

function Rating(props) {
  return (
    <div className="detail-ticket">
      <Row>
        <Col xs="12" md="6" lg="3">
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

        </Col>
      </Row>

      <div className="rating">
        <p className="rating__title">Phản hồi của bạn </p>
        <div className="rating__star">
          <div className="rating__star-icon"><FontAwesomeIcon onClick={handleClickStar} icon={faStar} color="gray" /></div>
          <div className="rating__star-icon"><FontAwesomeIcon onClick={handleClickStar} icon={faStar} color="gray" /></div>
          <div className="rating__star-icon"><FontAwesomeIcon onClick={handleClickStar} icon={faStar} color="gray" /></div>
          <div className="rating__star-icon"><FontAwesomeIcon onClick={handleClickStar} icon={faStar} color="gray" /></div>
          <div className="rating__star-icon"><FontAwesomeIcon onClick={handleClickStar} icon={faStar} color="gray" /></div>
        </div>

        <div className="rating__cmt">
          <textarea className="input-rating" placeholder="Nhập ý kiến của bạn" />
        </div>
        <div className="respond"><button className="btn btn-primary">Gửi phản hồi</button></div>


      </div>
    </div>



  );
}

export default Rating;