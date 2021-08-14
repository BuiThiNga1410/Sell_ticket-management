import React from "react";
import "../../../../index.css";
import "./MainPage.scss";
import Search from "../../../../components/Search";
import Slice from "../../../../components/Slice";

import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBus,
  faChargingStation,
} from "@fortawesome/free-solid-svg-icons";

MainPage.propTypes = {};

function MainPage(props) {
  const stations = [
    "https://dixere.vn/wp-content/uploads/2020/06/b%E1%BA%BFn-xe-gia-l%C3%A2m.jpg",
    "https://tintucxeco.net/wp-content/uploads/2019/05/hinh-anh-ben-xe-nuoc-ngam.jpg",
    "https://gialamhanoi.weebly.com/uploads/6/1/2/0/61209993/ben-xe-gia-lam_orig.jpg",
    "https://megabus.vn/wp-content/uploads/2018/12/bx-mien-tay_megabus-5.jpg",
    "https://thuevilla.com/wp-content/uploads/2017/08/h%C3%ACnh-%E1%BA%A3nh-b%E1%BA%BFn-xe-%C3%B4-t%C3%B4.jpg",
    "https://media.vov.vn/uploaded/mdonacdykms/2017_01_01/nuoc_ngam_01_vov_ftct.jpg",
    "https://image.thanhnien.vn/768/uploaded/congthang/2019_03_08/benxemiendong_vzos_uvsf.jpg",
    "https://photo-cms-baophapluat.zadn.vn/Uploaded/trinhninh/2020_03_30/013.jpg",
  ];

  const travels = [
    "https://d2sx1calt21doo.cloudfront.net/xxt/experience/image/3-jpg-1080x720-FIT-fe1fe6a204f8ebd899d9b7406e5f779e.jpeg",
    "https://cdn1.nhatrangtoday.vn/images/photos/kinh-nghiem-dat-ve-xe-nha-trang-da-lat-1.jpg",
    "https://baoxaydung.com.vn/stores/news_dataimages/vananh/052020/27/08/2423_image002.png",
    "https://fansipanlegend.sunworld.vn/wp-content/uploads/2020/06/Logo.jpg",
    "https://gonatour.vn/vnt_upload/news/09_2020/khu_du_lich_suoi_tien.jpg",
    "https://image.thanhnien.vn/1024/uploaded/quochung.qc/2020_03_04/axishotram/1_tfdg.jpg",
    "https://www.vietnambooking.com/wp-content/uploads/2020/07/hon-kho-quy-nhon-1.jpg",
    "https://vcdn-dulich.vnecdn.net/2020/09/16/image001-1600240652-9628-1600241203.jpg",
  ];

  return (
    <div>
      <div className="banner-wrap">
        <img className="logo-img" src="https://www.yellowpedal.com/assets/img/ride/bg_yp.png" alt="ticker" />
        <p className="banner-title">SELL TICKET MANGEMENT</p>
        <div className="search-wrap">
          <Search />
        </div>
      </div>
      <Slice
        name="BẾN XE KHÁCH"
        height={200}
        number_col={4}
        list_imgs={stations}
      />
      <div className="container service-info">
        <p className="service-title">THẮNG THANH - CHẤT LƯỢNG LÀ DANH DỰ</p>
        <Row>
          <Col sm="12" lg="4">
            <div className="rule">
              <div className="rule-icon">
                <FontAwesomeIcon
                  icon={faUsers}
                  color="rgba(245, 31, 31, 0.8)"
                  size="3x"
                />
              </div>
              <p className="rule-title">20M </p>
            </div>
            <p className="rule-content">
              Thắng Thanh phục vụ hơn 20 triệu lượt khách mỗi năm
            </p>
          </Col>
          <Col sm="12" lg="4">
            <div className="rule">
              <div className="rule-icon">
                <FontAwesomeIcon
                  icon={faChargingStation}
                  color="rgba(245, 31, 31, 0.8)"
                  size="3x"
                />
              </div>
              <p className="rule-title">250 </p>
            </div>
            <p className="rule-content">
              Thắng Thanh có hơn 250 phòng vé, trạm trung chuyển, bến xe... trên
              toàn hệ thống
            </p>
          </Col>

          <Col sm="12" lg="4">
            <div className="rule">
              <div className="rule-icon">
                <FontAwesomeIcon
                  icon={faBus}
                  color="rgba(245, 31, 31, 0.8)"
                  size="3x"
                />
              </div>
              <p className="rule-title">1,600 </p>
            </div>
            <p className="rule-content">
              Thắng Thanh phục vụ hơn 1600 chuyến xe đường dài và liên tỉnh mỗi
              năm
            </p>
          </Col>
        </Row>
      </div>
      <div className="container travel">
        <p className="travel-title">ĐIỂM ĐẾN PHỔ BIẾN</p>
        <p className="travel-content">
          Gợi ý những điểm du lịch được ưa thích trong năm
        </p>
        <Slice height={300} number_col={4} list_imgs={travels} />
      </div>
    </div>
  );
}

export default MainPage;
