
import './Slice.scss'
import { Row, Col } from 'react-bootstrap';

import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel() {
  const list_img = [["https://dixere.vn/wp-content/uploads/2020/06/b%E1%BA%BFn-xe-gia-l%C3%A2m.jpg",
    "https://tintucxeco.net/wp-content/uploads/2019/05/hinh-anh-ben-xe-nuoc-ngam.jpg",
    "https://gialamhanoi.weebly.com/uploads/6/1/2/0/61209993/ben-xe-gia-lam_orig.jpg",
    "https://megabus.vn/wp-content/uploads/2018/12/bx-mien-tay_megabus-5.jpg"], [
    "https://thuevilla.com/wp-content/uploads/2017/08/h%C3%ACnh-%E1%BA%A3nh-b%E1%BA%BFn-xe-%C3%B4-t%C3%B4.jpg",
    "https://media.vov.vn/uploaded/mdonacdykms/2017_01_01/nuoc_ngam_01_vov_ftct.jpg",
    "https://image.thanhnien.vn/768/uploaded/congthang/2019_03_08/benxemiendong_vzos_uvsf.jpg",
    "https://photo-cms-baophapluat.zadn.vn/Uploaded/trinhninh/2020_03_30/013.jpg"]
  ];
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container">
      <div className="container slice">
        <Row className="slice-title">BẾN XE KHÁCH </Row>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {list_img.map((img, idx1) => {
          return (
            <Carousel.Item>
              <Row >
                {img.map((img_child, idx) => {
                  return (<Col xs="12" md="4" lg="3">
                    <img src={img_child} alt="img" className="img" />
                  </Col>)
                })
                }
              </Row>
            </Carousel.Item>)
        })}
      </Carousel>
    </div>

  );
}

export default ControlledCarousel;