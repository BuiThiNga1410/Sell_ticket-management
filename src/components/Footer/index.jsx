import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './Footer.scss';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer(props) {
  return (
    <div className="footer">
      <Row>
        <Col sm="12" lg="6">
          <div className="infor">
            <FontAwesomeIcon icon={faMapMarker} size="lg" color="rgb(60, 163, 231)" />
            <p className="infor-content">08 Hà Văn Tính, Hòa Khánh Nam, Liên Chiểu, Đà Nẵng</p>
          </div>

          <div className="infor">
            <FontAwesomeIcon icon={faPhone} size="lg" color="rgb(60, 163, 231)" />
            <p className="infor-content">(+84)376755120</p>
          </div>

          <div className="infor">
            <FontAwesomeIcon icon={faEnvelope} size="lg" color="rgb(60, 163, 231)" />
            <p className="infor-content">ThangThanhCompany@gmail.com</p>
          </div>
        </Col>

        <Col sm="12" lg="6">
          <p className="infor-title">Tổng đài đặt vé và CSKH</p>
          <p className="phone-number">19002202</p>
          <div className="social-network">
            <div className="social-network__icon"><FontAwesomeIcon icon={faFacebook} size="2x" color="rgb(30, 90, 168)" /></div>
            <div className="social-network__icon"><FontAwesomeIcon icon={faYoutube} size="2x" color="rgb(243, 44, 44)" /></div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;