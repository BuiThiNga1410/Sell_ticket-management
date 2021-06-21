
import './Slice.scss'
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';


Slice.propTypes = {
  name: PropTypes.string,
  list_imgs: PropTypes.array,
  number_col: PropTypes.number,
  height: PropTypes.number,
};

Slice.defaultProps = {
  name: '',
  list_imgs: [],
  number_col: 0,
  height: 0,
}

function Slice(props) {
  const { name, list_imgs, number_col, height } = props;

  const getListImg = () => {
    const img_arr = [];
    for (let i = 0; i < list_imgs.length; i += number_col) {
      const list_image = [];
      for (let j = i; j < i + number_col && j < list_imgs.length; j++) {
        list_image.push(list_imgs[j]);
      }
      img_arr.push(list_image);
    }
    return img_arr;
  };

  const list_img = getListImg();


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container">
      <div className="container slice">
        <Row className="slice-title">{name}</Row>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {list_img.map((img, idx1) => {
          return (
            <Carousel.Item>
              <Row >
                {img.map((img_child, idx) => {
                  return (<Col xs="12" md="6" lg={12 / number_col}>
                    <img src={img_child} alt="img" className="img" height={`${height}px`} />
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

export default Slice;